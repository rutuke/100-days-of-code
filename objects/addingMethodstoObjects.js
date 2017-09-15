// methods: adding functions as properties to an object
// method is a function that is a property inside an object.
var obj = {
    name: "Frank",
    age: 20,
    add: function(x.y){
        return x + y;
    }
}
obj.add(10,5); //returns 15
// adding a method to an object - helps to keep code organised
//
function speak(){
    return "WOOF!";
}

function speak(){
    return "MEOW!";
}

// overrides the original speak() that returned woof - namespace collison
// if added as methods in object, both can be used.

var dogSpace = {

}
dogSpace.speak = function(){
    return "WOOF!";
}

var catSpace = {

};

catSpace.speak = function(){
    return "MEOW!";
}

// keyword -THIS-
// example
var comments = {};
comments.data = ["Good Job!", "Bye", "Hello"];
function print(arr){
    arr.forEach(function(el){
        console.log(el);
        });
    }
}
// print(comments.data);
var comments = {};
comments.data = ["Good Job!", "Bye", "Hello"];
comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
        });
    }
}
// this - refers to the object comments
comments.print();