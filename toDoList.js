// To Do List
// "new" - add a todo list
// "list" - view all todos
// "quit" - quit app
var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");

 while(input !== "quit"){
    // handle input
    if ( input === "list"){
        listTodos();
    } else if( input == "new"){
        newTodos();
    } else if (input === "delete"){
        deleteTodos();
    }
    // ask again for new input
    var input = prompt("What would you like to do?");
 }
 console.log("Ok, you quit the app!");

 function listTodos(){
        console.log("**********");
        todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
        });
        console.log("**********");
 }
 function newTodos(){
    //ask for new todo
    // add to dos array
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added todo!");
 }
 function deleteTodos(){
    // ask for index to be removed
    var index = prompt("Enter index of todo to delete: ");
    // delete that todo
    // splice()
    todos.splice(index, 1);
    console.log("Your item has been deleted");
    // index of item to be deleted, how many items after that you want deleted.
 }