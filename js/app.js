'use strict';
var userName = prompt('Welcome, what\'s your name?');

var petsName = ['Aston.jpg', 'Lona.jpg', 'Bagera.jpg', 'Blonde.jpg', 'Isam.jpg', 'Layto.jpg', 'Maino.jpg', 'Rachel.jpeg', 'Raino.png', 'Rebo.jpg'];
var petsBreed = ['Harzer Roller', 'Persian', 'Banda', 'Husky', 'Koala Bear', 'Mix', 'Tokie', 'Angora', 'Duski', 'Maymon'];
var petsPrice = [30, 70, 50, 100, 175, 120, 25, 60, 200, 270];
var total = 0;

function Pet(name, breed, price) {
    this.name = name;
    this.breed = breed;
    this.price = price;
    this.imagePath = `img/store/${this.name}`;
    Pet.all.push(this);
}
Pet.all = [];

for (var i = 0; i < petsName.length; i++) {
    new Pet(petsName[i], petsBreed[i], petsPrice[i]);
}

function domHtml() {
    var header = document.getElementById('theHeader');

    var h1E = document.createElement('h1');
    header.appendChild(h1E);
    h1E.textContent = 'Pets Store';

    var divNav = document.createElement('div');
    header.appendChild(divNav);

    var navE = document.createElement('nav');
    divNav.appendChild(navE);

    var ulE = document.createElement('ul');
    navE.appendChild(ulE);

    var liE1 = document.createElement('li');
    ulE.appendChild(liE1);

    var aE1 = document.createElement('a');
    liE1.appendChild(aE1);
    aE1.setAttribute('href', 'index.html');
    aE1.textContent = 'Home';

    var liE2 = document.createElement('li');
    ulE.appendChild(liE2);

    var aE2 = document.createElement('a');
    liE2.appendChild(aE2);
    aE2.setAttribute('href', 'store.html');
    aE2.textContent = 'Store';

    var liE3 = document.createElement('li');
    ulE.appendChild(liE3);

    var aE3 = document.createElement('a');
    liE3.appendChild(aE3);
    aE3.setAttribute('href', 'cart.html');
    aE3.textContent = 'Cart';

    var liE4 = document.createElement('li');
    ulE.appendChild(liE4);
    if (userName !== '') {
        liE4.textContent = `Visit by: ${userName}`;
    }

    var footerE = document.getElementById('footer');
    footerE.textContent = '© Copyright are reserved for Pets Store.'
}
domHtml();


var container = document.getElementById('div');

function render() {
    for (let j = 0; j < petsName.length; j++) {
        var divE = document.createElement('div');
        container.appendChild(divE);
        divE.setAttribute('id', Pet.all[j].name.split('.')[0]);

        var imgE = document.createElement('img');
        divE.appendChild(imgE);
        imgE.setAttribute('src', Pet.all[j].imagePath);
        imgE.setAttribute('alt', Pet.all[j].name.split('.')[0]);

        var pE1 = document.createElement('p');
        divE.appendChild(pE1);
        pE1.textContent = `Pet Name: ${Pet.all[j].name.split('.')[0]}.`;

        var pE2 = document.createElement('p');
        divE.appendChild(pE2);
        pE2.textContent = `Pet Breed: ${Pet.all[j].breed}.`;

        var pE3 = document.createElement('p');
        divE.appendChild(pE3);
        pE3.textContent = `Pet price: ${Pet.all[j].price}$.`;

        var inputE = document.createElement('input');
        divE.appendChild(inputE);
        inputE.setAttribute('type', 'button');
        inputE.setAttribute('value', 'Buy');
    }
}
render();


var buyPets = [];

container.addEventListener('click', function clickPet(event) {
    // event.preventDefault();

    if (event.target.id !== 'div') {
        for (var k = 0; k < petsName.length; k++) {
            if (event.target.id === Pet.all[k].name.split('.')[0]) {

                // if (!buyPets.includes(Pet.all[k])) {
                    buyPets.push(Pet.all[k]);
                    updatePets();
                    printCart();
                // }

            }
        }
    }
});


function updatePets() {
    var localPets = JSON.stringify(buyPets);
    localStorage.setItem('chosePets',localPets);
}

var containerCart = document.getElementById('divCart');

function printCart() {
    for (let k = 0; k < buyPets.length; k++) {

        var cont = document.createElement('div');
        containerCart.appendChild(cont);

        var imgE0 = document.createElement('img');
        cont.appendChild(imgE0);
        imgE0.setAttribute('src', buyPets[k].imagePath);
        imgE0.setAttribute('alt', buyPets[k].name.split('.')[0]);

        var pE11 = document.createElement('p');
        cont.appendChild(pE11);
        pE11.textContent = `Pet Name: ${buyPets[k].name.split('.')[0]}.`;

        var pE22 = document.createElement('p');
        cont.appendChild(pE22);
        pE22.textContent = `Pet Breed: ${buyPets[k].breed}.`;

        var pE33 = document.createElement('p');
        cont.appendChild(pE33);
        pE33.textContent = `Pet price: ${buyPets[k].price}$.`;
    }

}

function printStorage() {
    var localPets = localStorage.getItem('chosePets');
    if (localPets) {
        Pet.all = JSON.parse(localPets);
        printCart();
    }
}
printStorage();
