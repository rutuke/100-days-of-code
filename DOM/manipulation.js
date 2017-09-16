// changing an elements style
// adding/removing classes
// changing the content of a tag
// changing atributes eg src href

// STYLE
// select
var tag = document.getElementById("highlight");

// manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// Separation of Concerns - as little crossover between HTML CSS AND JS

// An alternative:
// Rather than directly manipulating style with JS, can define
// a CSS class and the toggle it on or of with JS

// Instead:

.some {
    color: blue;
    border: 10px solid red;
}
var tag = document.getElementsById("highlight");
// Add new class to the selected element
tag.classList.add("some");

// classList

tag.classList.add(); // add
tag.classList.remove(); // remove
tag.classList.toggle(); // toggle - takes class and turns it on or off.

// turns parts of CSS on or off - that's what JS is for!!!


