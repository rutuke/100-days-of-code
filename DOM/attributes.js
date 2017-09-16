// attributes
// use getAttribute() and setAttribute() to read and write attributes like src or href

// example

<a href="www.google.com">I am a link</a>
<img src = "logo.png">

////
var link = document.querySelector("a");
link.getAttribute("href"); // www.google.com
// change HREF attribute
link.setAttribute("href", "www.dogs.com");
// takes two arguement - 1st name of attribute and 2nd the link.
// < a href = "www.google.com"> I am a link </a>

// To change image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
// <img src = "corgi.png"