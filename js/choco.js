'use strict';

// Create Constructor
function Choco(name, quantity, phoneNum) {
    this.name = name;
    this.quantity = quantity;
    this.phoneNum = phoneNum;
    Choco.all.push(this);
}
Choco.all = [];

// Get ID's from HTML
var chocoForm = document.getElementById('chocoForm');
var chocoName = document.getElementById('chocoName');
var quantity = document.getElementById('quantity');
var phoneNum = document.getElementById('phoneNum');
var contaner = document.getElementById('contaner');

// Create eventListener with function
chocoForm.addEventListener('submit', function chocoFunc(e) {
    e.preventDefault();

    var chocN = e.target.chocoName.value;
    var chocQ = e.target.quantity.value;
    var chocP = e.target.phoneNum.value;

    new Choco(chocN, chocQ, chocP);

    chocoForm.reset();
    update();
    render();
});

// Store the values
function update() {
    var updateData = JSON.stringify(Choco.all);
    localStorage.setItem('theOrder', updateData);
}

// Renders Data
var ulE = document.createElement('ul');
contaner.appendChild(ulE);
var price = 0.25;
function render() {


    for (var i = 0; i < Choco.all.length; i++) {

        var li1 = document.createElement('li');
        ulE.appendChild(li1);
        li1.textContent = `Chocolate: ${Choco.all[i].name}.`;

        var li2 = document.createElement('li');
        ulE.appendChild(li2);
        li2.textContent = `The Quantitiy: ${Choco.all[i].quantity}`;

        var li3 = document.createElement('li');
        ulE.appendChild(li3);
        li3.textContent = `Your Phone Number: ${Choco.all[i].phoneNum}`;

        var li4 = document.createElement('li');
        ulE.appendChild(li4);
        li4.textContent = `Price: ${price * Choco.all[i].quantity} JD`

        var pE = document.createElement('p');
        ulE.appendChild(pE);
        pE.textContent = '';
    }
}

// Get Data
function getData() {
    var theResult = localStorage.getItem('theOrder');
    if (theResult) {
        Choco.all = JSON.parse(theResult);
        render();
    }
}
getData();