// object = data structure
// what they are and how we use them.

// eg modeling a single person: name, age, city etc
var person = ["Cindy", 32, "Dublin"];
// to retrieve the city
person[2]; // not every meaningful.
// causes trouble if the order is reversed.

// this is a perfect use case for objects
var person = {
    name: "Cindy",
    age: 32,
    city: "Dublin"
};
// property: value,

var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};
// unlike arrays, objects have no order. No property comes first or second.

// retrieving data
// bracket notation, similar to arrays:
console.log(person["name"]);
// dot notation:
console.log(person.name);

// cant use dot notation if property starts with a number
// cant use for properties with spaces

// updating data
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// to update age
person["age"] += 1;
// to update city
person.city = "London";

// creating objects
// one by one
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";
// all at once
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};
// another way
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

// objects can be found within objects eg
// can hold any type of data
var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Horatio", "Hamlet"],
    pet: {
        name: "Rusty",
        species: "Dog",
        age: 2
    }
};