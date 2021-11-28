var x = 10;
console.log(x); // print 10
if (true) {
var x = 20; // this changes the value of x outside the block
console.log(x);// print 20
}
console.log(x); // print 20 block not function

/****************************************
 * block 2
 */
 console.log ("/*************BLOCK2*********************** */");
var x = 10;
console.log(x); // print 10
if (true) {
(function() {
var x = 20;  // var does not apply to block level, stay at function scope
console.log(x); // prints 20
})();
}
console.log(x); // prints 10, back to global scope

/************************************************ */
/** block 3 */
console.log ("/*************BLOCK3*********************** */ ")
var x = 10;
console.log(x); // prints 10 first
function test()
{
var x = 20;
console.log(x);// inside the function, print 20
if (x > 10) {
let x = 30; // in block scope, print 30
console.log(x);
}
console.log(x);// function scope, print 20
}
test();
console.log(x);// global scope print 10

/***********************************************
 * block 4
 */
 console.log ("/*************BLOCK4*********************** */ ")
var x;
x = 10;
function test2()
{
var x;
if (x > 20) {
x = 50;
}
console.log(x); // looks at the function scope variable x, undefined, no value set
}
test2();

/**Block 5**********************************/
console.log ("/*************BLOCK5*********************** */ ")

function test1()
{
var x, y;
if (false) {
x = 50;
}
console.log(x); // undefined, declared but not initialized
console.log(y);// undefined, declared but not initialized
y = 100;
console.log(y);// 100 , after initialization
}
test1();

/**Block 6**********************************/
console.log ("/*************BLOCK6*********************** */ ")

function test()
{
foo();
// bar(); cannot call a function expression not hoisted
// Function defiened
// using function declaration
function foo()
{
console.log('foo'); // this will print no problem
}
// Function defined
// using function expression
var bar = function() {
console.log('bar');
}
bar(); // call the function after declaration 
}

test();
