//returning boolean values from functions
function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);

//return early pattern for function
function abTest(a, b) {
  if (a<0 || b<0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

//Counting Cards
var count = 0;

function cc(card) {
    // using switch statements to count value of each card.
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0){
    return (count +" Bet");
  }
  else {
    return (count +" Hold");
  }
}

cc(2); cc(3); cc(4); cc(5); cc(6);

//Building javascript objects
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  'name':'Puffy',
  'legs':4,
  'tails':1,
  'friends':["Dogs","Humans"]
};

//Accessing the objects properties with the dot operator
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing the objects properties with the bracket operator
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//Accessing objects properties with variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//Updating objects properties
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper";

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
myDog.name = "Happy Coder";

//Adding new properties to a JavaScript object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
myDog["bark"] = "woof";

//Deleting properties from JavaScript objects
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark;

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};
delete myDog.tails;

//Using objects for lookups
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo": "Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo": "Easy",
    "foxtrot":"Frank"
  };
  return lookup[val];
}
phoneticLookup("charlie");

//
