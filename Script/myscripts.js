//Add Task 
//Event Listener
const btnAddTask = document.getElementById('btnAddTask');
btnAddTask.addEventListener('click', addTask);

//Add Task Function
function addTask(e) {

    if (document.getElementById('textTask').value === '') {
        alert('Task Is Empty.');
    }
    else {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.location.href + "/Manage", true);
        var object = { "TaskString": document.getElementById('textTask').value };
        

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.onload = function () {
            if (this.status === 200) {
                var res = (this.response.d);
                console.log(res);
                Check();
            }  
        }
        xhr.send(object);
    }
    e.preventDefault();
}

//Remove Single Item
//Event Listener
const ul = document.getElementsByTagName('ul')[0];
ul.addEventListener('click', cancelTask);

//Cancel Task Function
function cancelTask(e) {
    if (e.target.id === 'liButton' && confirm('Are You Sure ??')) {
        e.target.parentElement.remove();
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
        var listItems = document.querySelectorAll('li');

        for (var i = 0; i < listItems.length; i++) {
            listItems[i].remove();
        }
    }
    e.preventDefault();
}

window.addEventListener('load', Check);
function Check(event) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href + "/List", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.onload = function () {
        if (this.status === 200) {
            var object = (this.response.d);
            for (var i = 0; i < object.length; i++) {

                //Create list Item
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(object[i].TaskString));

                //Create Cancel Button
                const btnCancel = document.createElement('button');
                btnCancel.id = 'liButton';
                btnCancel.href = '#';
                btnCancel.textContent = 'X';
                li.appendChild(btnCancel);

                const ul = document.getElementsByTagName('ul')[0];
                ul.appendChild(li);
            }
        }
        else {
        }
    }
    xhr.send();
}