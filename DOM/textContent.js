<p>
 This is an <strong>awesome</strong> paragraph
</p>

// selecting the <p> tag
var tag = document.querySelector("p");

// retrieve the textContent:
// everything between HTML tags - not including tags
tag.textContent; // retrieves the text - everything between the tags but not including them

tag.textContent = "blah blah blah";
// changes the content within the tags.

// innerHTML

var tag = document.querySelector("p");
tag.innerHTML;
// keeps all the tags like <strong> etc
// overwrites whatever is in the current HTML
document.querySelector("h1").textContent = "This is your text";

// replacing everything on the page
document.body.textContent = "<h1>Hello</h1>" // prints <h1>Hello</h1>
document.body.textContent = "<h1>Hello</h1>" // prints Hello
