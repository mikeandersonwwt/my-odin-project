//https://www.theodinproject.com/lessons/foundations-problem-solving#solving-fizz-buzz
// https://en.wikipedia.org/wiki/Fizz_buzz

// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// the user will enter a number from a prompt (popup box).
// loop from 1 to number entered
// numbers that divide by 3 without a remainder print Fizz
// numbers that divide by 5 without a remainder print Buzz
// numbers that divide by both 3 and 5 without a remainder print FizzBuzz
// otherwise print the current number

function runFizzBuzz(){
    console.log("************* FIZZBUZZ *************");

    let number = parseInt(prompt('Please enter the number between 1 and 100 you would like to FizzBuzz up to: ')); 
    
    if (number > 100) {
        console.log('Please enter a number less than or equal to 100');
        return;
    }
    if (number < 1) {
        console.log('Please enter a number greater than or equal to 1');
        return;
    }
    for(let i = 1; i <= number; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0){
            console.log('Fizz');
        }
        else if (i % 5 === 0){
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}