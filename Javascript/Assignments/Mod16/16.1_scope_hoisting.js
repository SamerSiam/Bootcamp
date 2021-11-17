// Block 1
function funcA() {
    console.log(a); // undefined, hoisted but without value.
    console.log(foo());//  2 from function foo();
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();  

/** calling funcA() will execute console.log statements above
 * output will be:
 * undefined
 * 2
/*************************************************** */

// Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
/**  this should print :Aurelio De Rosa, calling the getFullName()
 * function inside the scope of the object Obj.prop will get the closest variable inside
 * this scope which is fullName: 'Aurelio De Rosa'**/

var test = obj.prop.getFullName;
/** result is :John Doe, we got this when runing inside chrome 
 * console, VS code gave undefined. Reason has to do with the window object
  here it grabs the full name in the same scope as test. */ 
console.log(test());  // this gives undefined because no function called test()

/*************************************************** */
//Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB(); // call funB() that returns a to this scope 
console.log(typeof a); // undefined in this scope
console.log(typeof b);// number, after the function call, it registered b
/*************************************************** */
// Block 4

function funcC() {
    console.log("1");
    }
    funcC(); // will print 2
    function funcC() {
    console.log("2");
    }
    funcC(); // will print 2
    /** since there was another assignment to funC(), it will overwrite 
     * the first one.
     */

    /*************************************************** */
// Block 5
    function funcD1() {
    d = 1; // global variable
    }
    funcD1();
    console.log(d); // prints 1, d is global
    function funcD2() {
    var e = 1; // e is local to the function, cannot be seen outside
    }
    funcD2();
    console.log(e); // error

    /*************************************************** */
// Block 6
function funcE() {
    console.log("Value of f in local scope: ", f); // f=1
    }
    console.log("Value of f in global scope: ", f); 
    /** undefined this is before variable got initialized */
    var f = 1; // initialize variable
    funcE();// inside the funciton f=1