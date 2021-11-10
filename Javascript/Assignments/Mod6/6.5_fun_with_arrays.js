
//fill array with 100 instances of the same object using fill

const filledArray = new Array(100).fill(0);
const isArray= filledArray.isArray;
console.log("IS Array=", isArray);
console.log(filledArray); 

// create number array from 1-100 using Array.from
 
const temp= Array.from(filledArray, (_,x)=> x+1);
console.log (temp);

//convert array to object
const obj= Object.assign({},temp);
console.log (obj);

//convert values of object to an array
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const values= Object.values(person);
console.log (values);

// Create a copy of an array that won’t effect the original
// array if modified.
const newArray= filledArray.slice();
console.log(newArray);

// Create a copy of an array that will effect the original
// array if modified. (by reference)
const filledArray2= filledArray;