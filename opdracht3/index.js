/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//bron: https:https://www.youtube.com/watch?v=b9zyKCsUJfY
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05)
        }, 100);
    }
}

function displayContent() {
    loader.style.display = "none";
    document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById("loader");
    loadNow(2);
});

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //roept de URL op van de JSON
var request = new XMLHttpRequest(); //stuurt een verzoek om te vragen voor de informatie
request.open('GET', requestURL); //opent de aanvraag naar informatie

request.responseType = 'json'; //geeft aan dat de JSON veranderd moet worden naar een Javascript-object
request.send(); //je verzend het verzoek naar de server


request.onload = function () { //hulp gekregen van: Sanne 't Hooft
    var movies = request.response;
    var i;

    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]); //laat de eerste array zien van movies
        var newImage = document.createElement("img"); //geeft aan dat je een image gaat gebruiken
        newImage.setAttribute("src", movies[i].cover); //zoekt de bron bij cover bij de eerste in de array

        var carrousel = document.querySelector("#filmcovers"); //
        carrousel.appendChild(newImage); //zet de image in de section id
    }
}

//bron: https://developer.mozilla.org/nl/docs/Web/API/Document/drag_event//
//bron: https://glenino.github.io/frontend-voor-designers-1920/opdracht1 (Frontend voor Designers opdracht 1)

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    // zorgt ervoor dat iets sleepbaar wordt
    dragged = event.target;
    // maakt het transparant
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // verwijderd het transparante
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
    // zorgt ervoor dat je niet al eerder kan droppen
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    // geeft meer duidelijkheid als je in de buurt ben van wanneer je het element kan droppen
    if (event.target.className == "dropzone") {
        event.target.style.background = "green";
    }

}, false);

document.addEventListener("dragleave", function (event) {
    // zorgt ervoor dat de kleurverandering verdwijnt
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    // zorgt ervoor dat je niet ergens anders kan droppen.
    event.preventDefault();
    // zorgt ervoor dat je weet waar je de elementen kunt droppen
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

//bron: https://glenino.github.io/frontend-voor-designers-1920/opdracht2 (Frontend voor Designers opdracht 2)

var pijl1 = document.querySelector(".pijll");
//console.log(pijl1)
var pijl2 = document.querySelector(".pijlr");
//console.log(pijl2)
var sup = document.querySelector(".superm");
var currentimg = 1;

//geholpen door: Ender Akkanat en Koop Reynders
//bron: https://developer.mozilla.org/nl/docs/Web/API/Document/drag_event//
function beweeg() { //zorgt ervoor dat de carrousel naar rechts gaat

    if (currentimg == 1) {
        sup.classList.remove("waluigi"); //roept classes aan die alleen in de css staan
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

} //end function beweeg

function beweeg2() { //zorgt ervoor dat de carrousel naar links gaat

    if (currentimg == 6) {
        sup.classList.remove("mario");
        sup.classList.add("waluigi");
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

} //end function beweeg

function rechts() {
    currentimg = currentimg + 1;
    console.log(currentimg);

    if (currentimg > 6) {
        currentimg = 1;
    }

    beweeg();
}

function links() {
    currentimg = currentimg - 1;
    console.log(currentimg);

    if (currentimg < 1) {
        currentimg = 6;
    }

    beweeg2();
} //end function links()

pijl1.addEventListener("click", links); //zorgt ervoor dat de functie links (hieronder rechts) worden geactieveerd, als je op pijl1/pijl2 klikt.
pijl2.addEventListener("click", rechts);


document.addEventListener("keydown", function () { //zorgt ervoor dat de er iets gebeurd, wanneer je een toets indrukt op je toetsenbord 
    /*Bron: Ids Fijen*/
    function rechts() {
        currentimg = currentimg + 1;
        console.log(currentimg);

        if (currentimg > 6) { //zorgt ervoor wanneer je bij de laatste film bent en je naar links drukt, je naar de eerste film gaat
            currentimg = 1;
        }

        beweeg();
    }

    function links() {
        currentimg = currentimg - 1;
        console.log(currentimg);

        if (currentimg < 1) { //zorgt ervoor wanneer je bij de eerste film bent en je naar links drukt, je naar de laatste film gaat
            currentimg = 6;
        }

        beweeg2();
    } //end function links()
    if (event.keyCode == 37) { //zorgt dat de linkerpijltoets werkt
        links();
    } else if (event.keyCode == 39) { //zorgt dat de rechterpijltoets werkt
        rechts();
    }
});
