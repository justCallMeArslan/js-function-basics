function favoriteAnimal(animal) { //keyword: function, name of the function, parameters in parentheses
    return animal + " is my favorite animal!" //function body
}

const message = favoriteAnimal("Cat");
console.log(message);


// Local variables - variables declared inside a function is only visible inside that fucnction:

function showMessage() {
    let message = "Hello, Im JavaScript"; //example of local variable
    console.log(message);
}

showMessage(); // Hello, Im JavaScript
//alert(message); // will give an error as variable mesage declared locally


//Outer variables - variables that declared globally , outside any function

let userName = "Sam";

function showMessage1() {
    let message = "Sup, " + userName;
    console.log(message);
}

showMessage1(); // even if i have a log or alert within function it won't work until i call function.

let userName2 = "Fred";

function showMessage2() {
    userName2 = "Dick"; //changed outer variable

    let message = "Greeting, " + userName2;
    console.log(message);

}

console.log(userName2); // Fred - before function called.

showMessage2(); //function called - "Greetings, Dick".

console.log(userName2); //Dick - result after function called.

// outer variable is only used if there is no local one.

// if same-named variables created locally and globally function will use the one which is local and ignore global

let animal = "Worm";

function guessAnimal() {
    let animal = "Cockroach";
    console.log(animal);
}

guessAnimal(); // Cockroach - used as a local variable

console.log(animal); // Worm - ignored as global variable

//Parameters

//we can pass arbitrary data to functions using parameters, e.g function below has 2 parameters from and text:

function showMessage3(from, text) {
    console.log(from + ": " + text);
}

showMessage3("Ann", "Hi"); // when the function called, given values copied to local variables from and text
showMessage3("Ann", "How are you doing?"); // given values called arguments as they get passed to the function

// we declare functions listing their parameters, then call them by passing arguments.


//Default values

// if function is called, but argument is not provided, then the corresponding value becomes undefined.

showMessage3("Ann"); // in this example we call the same function as in previous example, but without giving 
// one of arguments. result - "Ann" : undefined. 

// we can specify the so-called "default" value for a parameter in the function declaration, using = :

function showMessage4(from, text = "no text found") {
    console.log(from + ": " + text);
}

showMessage4("Ann"); // Ann: no text found

//default value also jumps in when parameter exists, but strictly equals to undefined:

showMessage4("Ann", undefined); // Ann: no text found

// in example above "no text found" is a string, but it can be a more complex expression, which is only eveluated
// and assigned if the parameter is missing. in example below function anotherFunction() will be called, only 
// if the text parameter is provided and will be called everytime when text parameter missing:

function showMessage5(from, text = anotherFunction()) { }



// Alternative default parameters 

// sometimes it makes sense to assign default values for parameters at a later stage after the function was 
// already declared. 
// we can check if the parameter is passed during function execution, by comparing it with undefined:

function showMessage6(text) {
    if (text === undefined) { // check if parameter is missing 
        text = "empty message";
    }
    console.log(text);
}

showMessage6(); //no arguments passed to give value to text parameter, resulted in "empty message" string

// another option on modern JS engines is nullish coalescing operator ??, its better when most falsy values,
// such as 0, should be considered "normal" :

function showCount(count) {
    console.log(count ?? "unknown"); // if count undefiend or null, show "unknown"
}

showCount(0);
showCount(null);
showCount();


// Returning a value

// a function can return a value back into the calling code as the result. 

function sum(a, b) {
    return a * b; // the directive return can be in any place of the function. When the execution reaches it,
    // the function stops, and the value is returned to the calling code.    
}

console.log(sum(6, 5));


function checkAge(age) {
    if (age >= 18) { // 2. After getting age of user we compare it against age of being "legal"
        return true; // 3. If age more than 18 or equal to 18 we pass true to second if statement
    } else {
        return ('Do you have permission from your parents?'); // should be confirm()
    }
}

let age = ('How old are you?', "0");    // 1. Ask how old user is?  Should be prompt()
if (checkAge(age)) { //4. recieved true and proceeds with reply to user
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// it is possible to use return without a value. That causes the function to exit immediately. It happens because,
// function with an empty return or without it returns undefined. 


function doNothing() {
}
console.log(doNothing() === undefined); // true

function doAbsoluelyNothing() {
    return;
}
console.log(doAbsoluelyNothing() === undefined); // true


function showMovie(age) {
    if (checkAge(age)) {
        return;
    }
    console.log("Showing you the movie");
}
console.log(showMovie());


// when we want to return long expression we should start it in the same line as return

// return 
//  (some + long + expression + or + whatever * f(a) + f(b))  - this is wrong

// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )                                                        - this is correct



//Naming a function 

// functions are actions, so their name is usually a verb. Ideally it should be brief, acccurate as possible and
// describe what function does.

// examples of good function names :
// showMessage(..) - shows a message
// getAge(..)      - returns the age (gets it somehow)
// calcSum(..)     - calculates a sum and returns the result
// createForm(..)  - creates a form (and usually returns it)
// checkPermission(..) - checks a permission, returns true/false

// function should do exactly what is suggested by its name, no more. two independent actions usually deserve
// two functions (in that case its better to create 3rd function that calls those two).

// separate functions sometimes can be very difficult , but it will ease to test and debug - its very existence
// is a great comment.



//Anonymous function

// its called anonymous because it has no name. They usually used when a function parameter is often passed as an
// anonymous function.
// this form of creating a function is also known as function expression. Unlike function declaraion, function 
// expression are not hoisted, meaning they cant be called before function defined in the code.
// no matter the way function created (expression or declaration ), a function is value.

// example with addEventListener():

// let textBox = document.querySelector("#textBox");
// let output = document.querySelector("#output");

// function logKey (event) {
//     console.log(`You pressed "${event.key}".`);
// }
// textBox.addEventListener("keydown", logKey);

// // instead of defining separate logKey() function, you can pass an anonymous function into addEventListener():

// textBox.addEventListener("keydown", function(event){
//     console.log(`You pressed "${event.key}"`);});


// Arrow functions

// using the example above, we can use alternative form called arrow function. Instead of function(event), we
// write (event) => :

// general syntax: 

// let func = (arg1, arg2, ..., argN) => expression;

let sum1 = (a, b) => a + b; // option with two arguments

console.log(sum1(1, 99));


let double = n => n * 2;  // one argument option
console.log(double(50));


let sayHi = () => console.log("Hello"); // option with no arguments. parentheses are empty, but they must
sayHi();


// Multiline arrow functions

// when complex function with multiple expressions and statements is the case, we enclose it in curly braces
// the major difference is that curly braces require a return within them to return a value:

let sum2 = (a, b) => {
    let result = a * b;
    return result;
};

console.log(sum2(25, 4));


// small real - life example:

let textBox = document.querySelector("#textBox");
let output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});







//Functiom scope and conflicts

// scope - an important concept when dealing with functions. When function created, the variables and other
// things defined inside the function are inside their own separate scope, means they locked in their own 
// separate compartment, unreachable from code outside the function. 
// The top-level outside the function is called the global scope. Values defined in the global scope are
// accessible from everywhere in the code.
// Its done for security and organization, to prevent any interrution or intersection from internal or 
// external resources.

// referenceError: "x" is not defined error is one of the most common you'll encounter. If you get this 
// error and you are sure that you have defined the variable in question, check what scope it is in.

// loops and conditional scopes work the same way as functions scope. 



//Callback function

// its a function which is passed as an arhument to another function, which then calls it later. Its 
// typically used for asynchronous operation (like fetching data) is finished, allowed code to run 
// in a specific order or respond to events.

// example of function which uses callback functions and performs as confirm form with feedback depemding 
// of user choice. 

function ask(question, yes, no) {
    if (console.log(question)) yes() //should be confirm
    else no();
}

function showOk() { // callback function 
    console.log("You agreed.");
}

function showCancel() { // callback function
    console.log("You cancelled executiom");
}

ask("Do you agree?", showOk, showCancel); //showOk used as CB function if yes (OK buton), and showCancel 
// if no (Cancel button) clicked


// same function but with function expressions. in this example functions (actions) declared right inside 
// ask call.

function ask(question, yes, no) {
    if (console.log(question)) yes() //should be confirm
    else no();
}

ask(
    "Do you agree?",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);


// Function Expresion vs Function Declaration

// function declaration: a function declared as separate statement, in the main code flow:

function sum(a, b) {
    return a + b;
}

sum(3, 5);

// function expression: a function, created inside an expression or inside another syntax construt:

let sub = function (q, w) {
    return q - w;
}

sub(9, 8);

// function expression is created when the execution reaches it and is usable only from that moment. it
// "initializes" when execution flow passes through.

// function declaration can be called earlier than it is defined. another feature of FD is that in strict 
// mode , when function declaration is within a code block, it is visible everywhere inside that block, but
// not outside of it.

// both of these behaviors are caused by the fact that internal JavaScript algorithms :

// when JavaScript prepares to run the script, it first looks for global function declaration in it and 
// creates ("initializes") the functions, after them being procesed code flow executes and than we start
// to "initialze" function expressions.


// When choose what

// As a rule of thumb, when we need to declare a function, the first thing to consider is function 
// declaration syntax. It gives more:
// - freedom in how to organize code, because we can call such functions before the declared. 
// - readability 

// for cases where function declaration does not suit or conditional decalaration is required - we need to 
// use functional expression.

