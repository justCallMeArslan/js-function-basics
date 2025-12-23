function favoriteAnimal(animal){ //keyword: function, name of the function, parameters in parentheses
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

// we declare functions listing their parameters, then call them passing arguments.


//Default values

// if function is called,but argument is not provided, then the corresponding value becomes undefined.

showMessage3 ("Ann"); // in this example we call the same function as in previous example, but without giving 
// one of arguments. result - "Ann" : undefined. 

// we can specify the so-called "default" value for a parameter in the function declaration, using = :

function showMessage4( from, text = "no text found"){
    console.log(from + ": " + text);
}

showMessage4("Ann"); // Ann: no text found

//default valuealso jumps in when parameter exists, but strictly equals to undefined:

showMessage4("Ann", undefined); // Ann: no text found

// in example above "no text given" is a string, butit can be a more complex expression, which is only eveluated
// and assigned if the parameter is missing. in example below function anotherFunction() well be called, only 
// if the text parameter is provided and will be called everytime when text parameter missing:

function showMessage5(from, text = anotherFunction()){}



// Alternative default parameters 

// sometimes it makes sense to assign default values for parameters at a later stage after the function was 
// already declared. 
// we can check if the parameter is passed during function execution, by comparing it with undefined:

function showMessage6(text){
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
