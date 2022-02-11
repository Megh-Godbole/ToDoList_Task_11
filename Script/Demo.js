//Create To Do List 
var toDoList = {
    //Init Variables
    elementSelector: {
        submit: "btnSubmit",
        name: "tbName",
        output: "lblOutput"
    },
    //init Controls
    controls: {
        submitBtn: undefined,
        name: undefined,
        output: undefined
    },
    //Calling Function Throught Main Function
    init: function () {
        toDoList.initControls();
        toDoList.initEvents();
    },
    //Control Init Function
    initControls: function () {
        toDoList.controls.submitBtn = document.getElementById(toDoList.elementSelector.submit);
        toDoList.controls.name = document.getElementById(toDoList.elementSelector.name);
        toDoList.controls.output = document.getElementById(toDoList.elementSelector.output);
    },
    //Set Event Listener
    initEvents: function () {
        if (toDoList.controls.submitBtn) {
            toDoList.controls.submitBtn.addEventListener('click', toDoList.onSubmit);
        }
    },
    //Submit Function
    onSubmit: function (e) {
        var name = "";
        if (toDoList.controls.name && toDoList.controls.name.value === '') {
            alert('Name Is Empty.');
        }
        else {
            name = toDoList.controls.name.value;
            //console.log(name);
            //function onError() {
            //    toDoList.controls.textContext = "Some Thing Went Wrong";
            //}
            //function onSucess(result) {
            //    toDoList.controls.output.innerHTML = 'Using Page Methods : ' + name + '<br /> Date Time : ' + result;
            //    console.log(result);
            //}
            //PageMethods.GetDateTime(onSucess, onError);

            var xhr = new XMLHttpRequest();
            xhr.open('GET', window.location.href + "/GetTasks", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.responseType = "json";
            xhr.onload = function () {
                if (this.status === 200) {
                    var object = (this.response);
                    toDoList.controls.output.innerText = object.d;
                }
                else {
                    toDoList.controls.output.innerText = "Some Thing Went Wrong";
                }
            }
            xhr.send();
        }
        e.preventDefault();
    }
}


document.addEventListener("DOMContentLoaded", toDoList.init);