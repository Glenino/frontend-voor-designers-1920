/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//var header = document.querySelector('header');//roept de header aan
//var section = document.querySelector('section'); //roept de section aan

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //roept de URL op van de JSON
var request = new XMLHttpRequest(); //stuurt een verzoek om te vragen voor de informatie
request.open('GET', requestURL); //opent de aanvraag naar informatie

request.responseType = 'json'; //geeft aan dat de JSON veranderd moet worden naar een Javascript-object
request.send(); //je verzend het verzoek naar de server

request.onload = function () {
    var movies = request.response;
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]); //laat de eerste array zien van movies
        var newImage = document.createElement("img"); //geeft aan dat je een image gaat gebruiken
        newImage.setAttribute("src", movies[i].cover); //zoekt de bron bij cover bij de eerste in de array
        document.body.appendChild(newImage); //zet de image in de body
    }
}

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
        event.target.style.background = "green";
    }

}, false);

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

//bron: https://developer.mozilla.org/nl/docs/Web/API/Document/drag_event//

var pijl1 = document.querySelector(".pijll");
//console.log(pijl1)
var pijl2 = document.querySelector(".pijlr");
//console.log(pijl2)
var sup = document.querySelector(".superm");
var currentimg = 1;

//geholpen door: Ender Akkanat en Koop Reynders
function beweeg() {

    if (currentimg == 1) {
        sup.classList.remove("rosalina");
        sup.classList.add("mario");
    }

    if (currentimg == 2) {
        sup.classList.remove("mario");
        sup.classList.add("luigi");
    }
    if (currentimg == 3) {
        sup.classList.remove("luigi");
        sup.classList.add("peach");
    }
    if (currentimg == 4) {
        sup.classList.remove("peach");
        sup.classList.add("daisy");
    }
    if (currentimg == 5) {
        sup.classList.remove("daisy");
        sup.classList.add("wario");
    }
    if (currentimg == 6) {
        sup.classList.remove("wario");
        sup.classList.add("waluigi");
    }
    if (currentimg == 7) {
        sup.classList.remove("waluigi");
        sup.classList.add("yoshi");
    }
    if (currentimg == 8) {
        sup.classList.remove("yoshi");
        sup.classList.add("rosalina");
    }

} //end function beweeg

function beweeg2() {

    if (currentimg == 8) {
        sup.classList.remove("mario");
        sup.classList.add("rosalina");
    }

    if (currentimg == 1) {
        sup.classList.remove("luigi");
        sup.classList.add("mario");
    }
    if (currentimg == 2) {
        sup.classList.remove("peach");
        sup.classList.add("luigi");
    }
    if (currentimg == 3) {
        sup.classList.remove("daisy");
        sup.classList.add("peach");
    }
    if (currentimg == 4) {
        sup.classList.remove("wario");
        sup.classList.add("daisy");
    }
    if (currentimg == 5) {
        sup.classList.remove("waluigi");
        sup.classList.add("wario");
    }
    if (currentimg == 6) {
        sup.classList.remove("yoshi");
        sup.classList.add("waluigi");
    }
    if (currentimg == 7) {
        sup.classList.remove("rosalina");
        sup.classList.add("yoshi");
    }

} //end function beweeg

function rechts() {
    currentimg = currentimg + 1;
    console.log(currentimg);

    if (currentimg > 8) {
        currentimg = 1;
    }

    beweeg();
}

function links() {
    currentimg = currentimg - 1;
    console.log(currentimg);

    if (currentimg < 1) {
        currentimg = 8;
    }

    beweeg2();
} //end function links()

pijl1.addEventListener("click", links);
pijl2.addEventListener("click", rechts);

function pijlen(event) {
    if (event.keyCode == 37) {
         currentimg = currentimg - 1;
    console.log(currentimg);

    if (currentimg < 1) {
        currentimg = 8;
    }

    beweeg2();
    } 
    else if (event.keyCode == 39) {
        currentimg = currentimg + 1;
    console.log(currentimg);

    if (currentimg > 8) {
        currentimg = 1;
    }

    beweeg();
    }
}

pijl1.addEventListener("keydown", pijlen);
pijl2.addEventListener("keydown", pijlen);

