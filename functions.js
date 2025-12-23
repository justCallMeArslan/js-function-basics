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
