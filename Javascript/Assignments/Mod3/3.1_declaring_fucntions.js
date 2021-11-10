/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
const welcomeMsg= function(){
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const exponent=function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

//named function expression
const addition= function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}


// From function expressions to function declarations
// const hello = () => "Hello!";

function hello() {
    return "Hello";
}

// const squareRoot = a => Math.sqrt(a);
function sqrt(a){
    return Math.sqrt(a);
}


// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNum (a,b){
    return (Math.random() *(a-b) +b);
}


