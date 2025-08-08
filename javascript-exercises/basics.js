// The 4 functions from the functions basics assignment. Runs in the console.
// https://www.theodinproject.com/lessons/foundations-function-basics#assignment
console.log("******** FOUR FUNCTIONS ********")
// Write a function called add7 that takes one number and returns that number + 7.
function add7(num){
    return num + 7;
}
console.log(add7(10));


// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2, 3));


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('jAVaScrIPt'));


// Write a function called lastLetter that takes a string and returns the very last letter of that string.
function lastLetter(text) {
    return text[text.length - 1];
}
console.log(lastLetter('hello world'));