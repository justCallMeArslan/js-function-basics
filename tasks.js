// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(1, 6));
console.log(min(19, 3));
console.log(min(29, 2));
console.log(min(17, -7));
console.log(min(10, 6));



// Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);


// Write a function called add7 that takes one number and returns that number + 7.
// add7(10) should return 17



function add7(num) {
    console.log(num + 7);
}

add7(10);



//TOP curriculum projects


// Write a function called multiply that takes 2 numbers and returns their product.
// multiply(3, 2) should return 6

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 2));


// Write a function called capitalize that takes a string and returns that string with only 
// the first letter capitalized. Make sure that it can take strings that are lowercase, 
// UPPERCASE or both:
// capitalize("abcd") should return "Abcd"
// capitalize("ABCD") should return "Abcd"
// capitalize("aBcD") should return "Abcd"


function capitalize(str) {
    if (str.length === 0) {
        return str
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.slice(1).toLowerCase();

    return firstLetter + restOfWord;

}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));



// Write a function called lastLetter that takes a string and returns the very last letter of that 
// string:
// lastLetter("abcd") should return "d"

function lastLetter(str1) {
    return str1.slice(-1)
}

console.log(lastLetter("abcd"));

function test() {
  console.log("Hello");
}

let result = test();
console.log(result);