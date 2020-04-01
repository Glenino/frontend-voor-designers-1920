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

//  populateHeader(superHeroes);
//  showHeroes(superHeroes);
// hier wacht je op het antwoord van de server

//function populateHeader(jsonObj) {
//  var myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['id'];
//  header.appendChild(myH1);
//
//  var myPara = document.createElement('p');
//  myPara.textContent = 'Title: ' + jsonObj['title'] + ' // Release_date: ' + jsonObj['release_date'];
//  header.appendChild(myPara);
//} //door deze functie kunnen we de JSON-gegevens gebruiken
//
//function showHeroes(jsonObj) {
//  var heroes = jsonObj['reviews'];
//      
//  for (var i = 0; i < heroes.length; i++) {
//    var myArticle = document.createElement('article');
//    var myH2 = document.createElement('h2');
//    var myPara1 = document.createElement('p');
//    var myPara2 = document.createElement('p');
//    var myPara3 = document.createElement('p');
//    var myList = document.createElement('ul');
//
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//        
//    var superPowers = heroes[i].powers;
//    for (var j = 0; j < superPowers.length; j++) {
//      var listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//
//    section.appendChild(myArticle);
//  }
//}
//
//console.log()//maakt de informatiekaarten aan

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

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