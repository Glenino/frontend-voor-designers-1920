/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

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
