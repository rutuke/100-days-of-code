// define and add data to arays - remove and add elements.
// use built in array methods etc
// build a simple console todo list!!!

//eg
var friend1 = "charlie";
var friend2 = "banana";
var friend3 = "rusty";
var friend4 = "david";
var friend5 = "darragh";

var friends = ["charlie", "banana", "rusty", "darragh", "david"];
// array list is denoted by the square [] brackets.
// items in the array are indexed - starting at 0..1..2..3
// they are indexed starting at 0.
// calling the array
console.log(friends[0]); // calls charlie!
friends[1] + " <3 " + friends[3];

// can update the array values.
//eg
friends[0] = "Chuck";
// if you call friends[0] now you will get Chuck not charlie.
// can add new data at the end of the array
friends[4] = "Amelie";

// ways of initialising new empty arrays
var friends = [];
var friends = new Array();

// arrays can hold any type of data
var randomCollection = [49, true, "Hermione", null];

// Arrays have a length property
var nums = [45,37,89,24];
nums.length // 4
