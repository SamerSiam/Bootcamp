var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
/** here firstResult value will be the function 
 * function otherFunction(input) {
return b; it returns the function otherFunction
}
  */
var result = firstResult(2);
/** this is like calling otherFunction(2)
 * which looks at using lexical scoping since it is set in the parent
 * to be b=5, so it returns 5. 
 */

// console.log("first result is:  " + firstResult);
// console.log(" result is:  " + result);
/*********************************************************
 * Block 2
 */
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
/*********************************************************
 * Block 3
 */
 let i;
 for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
 }