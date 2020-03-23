'use strict';

function TT(TEXT) {
    this.TEXT = TEXT;
    TT.TTE.push(this);
}
TT.TTE = [];

var taskAdder = document.getElementById('taskAdder');
var myTasks = document.getElementById('myTasks');

taskAdder.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    var textTask = event.target.task.value;

    new TT(textTask);

    this.reset();
    render();
    upDate();
}



function upDate() {
    var updateData = JSON.stringify(TT.TTE);
    localStorage.setItem('theAction',updateData);
}


function render() {
    for (var i = 0; i < TT.TTE.length; i++) {
        var liE = document.createElement('li');
        myTasks.appendChild(liE);
        liE.textContent = TT.TTE[i].TEXT;
    }
}


function printData(){
    var theList = localStorage.getItem('theAction');
    if(theList){
    TT.TTE = JSON.parse(theList);

    render();
}
}
printData();