// push/pop
// shift/unshift
// indexOf
// slice

// use push to add to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green");

// use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();
// removes yellow

var col = colors.pop();
// stores the removed element of the array in a var col.


// use unshift to add to the front of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");

// use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
// removes red

var col = colors.shift();

// indexOf can be used to find an item in an array
var friends = ["charlie", "liz", "david", "mattias", "liz"];
// returns the first index a given element can be found at
friends.indexOf("david");
friends.indexOf("liz"); // returns 1 not 4!!

friends.indexOf("Hagrid");
// returns -1 if the element is not present.

//slice can be used to copy different parts of an array
var fruits = ["banana", "orange", "lemon", "apple", "apple"];
// use slice to copy the 2nd and 3rd elements.
// specify index where the new array start and ends is 1 and 3 - but 3 is not includsive.
var citrus = fruits.slice(1,3);
// this does not alter the original fruits array
// citrus is a new array now with 2 elements - orange and lemon.
// fruits still contains all the same elements.

// you can also use slice to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();


