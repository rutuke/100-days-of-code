// document: it all starts with the document - its the root node.
document.URL
document.links
document.body
document.head

// 5 main methods:
// return node lists not arrays!
document.getElementById("highlight");
var tags = document.getElementsByClassName("bolded");
    console.log(tags[0]);
document.getElementsByTagName("li");
document.querySelector("#highlight");
// takes a CSS style selector eg #highlight, .bolded, body
// only gives the very first match!
document.querySelectorAll();
// same as above but returns ALL matches!

console.dir();

// prints out javascript objects - looks like HTML but ITS NOT!


