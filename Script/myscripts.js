//Add Task 
//Event Listener
const btnAddTask = document.getElementById('btnAddTask');
btnAddTask.addEventListener('click', addTask);

//Add Task Function
function addTask(e) {
    const NewTask = document.getElementById('textTask').value;
    const TaskList = document.querySelector('ul');
    console.log(TaskList)
    if (NewTask === '') {
        alert('Task Is Empty.');
    }
    else {
        //Create XML Http Post Request
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.location.href + "/Add", true);
        var data = `{task :"${NewTask}"}`;
        
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.onload = function () {
            if (this.status === 200) {
                Check();
            }
        }
        xhr.send(data);
        document.getElementById('textTask').value = '';
    }
    e.preventDefault();
}

//Work On Single Item
//Event Listener
const ul = document.getElementsByTagName('ul')[0];
ul.addEventListener('click', editTask);

//Edit Task Function
function editTask(e) {
    if (e.target.className === 'material-icons' && confirm('Are You Sure ??')) {

        //Create XML Http Post Request
        var xhr = new XMLHttpRequest();
        var task = e.target.previousSibling.textContent;
        xhr.open('POST', window.location.href + '/Delete', true);
        var data = `{task :"${task}"}`;
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.onload = function () {
            if (this.status === 200) {
                Check();
            }
        }
        xhr.send(data);
    }
    else if (e.target.className === 'fa fa-pencil') {

        var taskNew = prompt('Enter The Updated Task');
        if (taskNew !== '' && taskNew !== null) {
            //Create XML Http Post Request
            var xhr = new XMLHttpRequest();
            var taskOld = e.target.previousSibling.previousSibling.textContent;
            xhr.open('POST', window.location.href + '/Update', true);
            var data = `{taskNew :"${taskNew}",taskOld:"${taskOld}"}`;
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.responseType = "json";
            xhr.onload = function () {
                if (this.status === 200) {
                    Check();
                }
            }
            xhr.send(data);
        }
    }
    e.preventDefault();
}

//Clear Task
//Event Listener
const btnClearTask = document.getElementById("btnClearTask");
btnClearTask.addEventListener('click', clearTask);

//Clear Task Function
function clearTask(e) {
    if (confirm('Are You Sure ??')) {
        //Create XML Http Get Request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', window.location.href + "/DeleteAll", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.onload = function () {
            if (this.status === 200) {
                Check();
            }
        }
        xhr.send();
    }
    e.preventDefault();
}

//On Load Event Listener
window.addEventListener('load', Check);
//Load Function
function Check(event) {
    //Create XML Http Get Request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href + "/List", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.onload = function () {
        if (this.status === 200) {

            var listItems = document.querySelectorAll('li');
            for (var i = 0; i < listItems.length; i++) {
                listItems[i].remove();
            }
            var object = (this.response.d);
            for (var i = 0; i < object.length; i++) {

                //Create list Item
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.id = 'TaskText';
                span.appendChild(document.createTextNode(object[i].TaskString));
                li.appendChild(span);

                //Create Cancel Button
                const btnCancel = document.createElement('i');
                btnCancel.className = 'material-icons';
                btnCancel.style = 'color:red;float: right';
                btnCancel.textContent = 'cancel';
                li.appendChild(btnCancel);

                //Create Edit Button
                const btnEdit = document.createElement('i');
                btnEdit.className = 'fa fa-pencil';
                btnEdit.style = 'float:right';
                li.appendChild(btnEdit);

                const ul = document.getElementsByTagName('ul')[0];
                ul.appendChild(li);
            }
        }
        else {
        }
    }
    xhr.send();
}