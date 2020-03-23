'use strict';

//Create a Constructor
function Forms(key,value) {
    this.key = key;
    this.value = value;
    Forms.all.push(this);
}
Forms.all = [];


//Get the ID from HTML
var myForm = document.getElementById('myForm');
var inpKey = document.getElementById('inpKey');
var inpValue = document.getElementById('inpValue');
var lsOutput = document.getElementById('lsOutput');

//Add the eventListener
myForm.addEventListener('submit',submitMe);

//Create function refers to eventListener
function submitMe(event) {
    event.preventDefault();

    var theKey = event.target.inpKey.value;
    var theValue = event.target.inpValue.value;

    new Forms(theKey,theValue);

    myForm.reset();

    updateResulte();
    // render();
    getResulte();
}

//Store values
function updateResulte() {
    var storeResulte = JSON.stringify(Forms.all);
    localStorage.setItem('results',storeResulte);
}

//The render for resultes
function render() {
    var ulE = document.createElement('ul');
    lsOutput.appendChild(ulE);

    for (let i = 0; i < Forms.all.length; i++) {
        var pE = document.createElement('p');
        ulE.appendChild(pE);

        pE.textContent = `${Forms.all[i].key}: ${Forms.all[i].value}.`
    }
}

//Get the results what we store
function getResulte() {
    var printResult = localStorage.getItem('results');
    if (printResult) {
        Forms.all = JSON.parse(printResult);
        lsOutput.innerHTML = '';
        render();
    }
}
getResulte();