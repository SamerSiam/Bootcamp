const people= ["Greg", "Mary", "Devon", "James"];
printArray();

//Write the command to remove "Greg" from the array.
people.shift();

// Write the command to remove "James" from the array.
people.pop();


// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");

// 5. Write the command to add your name to the end of the array.
people.push("Samer");

// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
for (let x=0; x<people.length; x++)
   {
       console.log (`person at index ${x} is: ${people[x]}`);
       if (people[x] ==='Mary')
       {
           break;
       }
   }
// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
console.log("After Slice Command",people.slice(2,4));


// 8. Write the command that gives the indexOf where "Mary" is located.
console.log("Index of Mary is",people.indexOf('Mary'));

// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
console.log("Index of Foo is",people.indexOf('Foo'));

// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
const people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2,1,'Elizabeth', 'Artie');
console.log(people1);

// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".
let withBob=people+' Bob';
console.log(withBob);

// Using a loop, iterate through this array and console.log all of the people.
function printArray()
{
for (let i=0; i<people.length; i++)
   {
       console.log (`person at index ${i} is: ${people[i]}`);
   }
}