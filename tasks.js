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




// Write a function called multiply that takes 2 numbers and returns their product.
// multiply(3, 2) should return 6




// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// capitalize("abcd") should return "Abcd"
// capitalize("ABCD") should return "Abcd"
// capitalize("aBcD") should return "Abcd"




// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"