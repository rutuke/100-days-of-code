// array is a list of items bound by an index eg object[0];
// objects are not a list of items and are not assigned an index
// key-value pairs - eg like word - meaning like dictionary.
// array is a subset of key-value pairs: key is always number

// array
var dogs = ["Rusty", "Lucky", "Bubba"];

// objects
var dog = {
    name: "Bubba",
    breed: "Lab"
};

// access data out
// array
dogs[1]; //lucky

// objects
dog["name"];
dog.name;

// adding new data
// array
dogs.push("Wyatt");

// object
dog.age = 6;

// updating items
// array
dogs[1] = "Lucy";

// object
dog.breed = "Black Lab";
