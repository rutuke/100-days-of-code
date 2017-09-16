// JS meets HTML & CSS
// DOM - Document Object Model - interface between JS and HTML/CSS
// DOM Manipulation -
// Select, then manipulate:
// Can be found in games; scrolling effects; dropdown menus; form validations
// interactivity; animations; every awesome site ever.
// Browser turns every HTML tag into a JS object we can manipulate
// Everything is stored in a DOM. // document object
// how to change things - get a value out of form, interactive things etc

// object - root node that's inside 'document'
// top level object = document;

// SELECT and then MANIPULATE an element.
// eg changing the color of a <h1> using JS

// example
var h1 = document.querySelector("h1");
// querySelector = selects a variable/object
h1.style.color = "pink";
// manipulates the <h1>

// example
var body = document.queySelector("body"); // selects the body
var isBlue = false;

setInterval(function(){ // manipulates the object
    if (isBlue){
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue =! isBlue;
}, 1000);
