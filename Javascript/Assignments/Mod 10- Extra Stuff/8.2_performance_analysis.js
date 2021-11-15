const maxCount = 1000000;

// Adding key/value pais to a map
console.time("Map Set loop 1M")// <---- Starts the timer
const myMap= new Map();
for(let i =0; i < maxCount; i++){
myMap.set(i,"Test");

} console.timeEnd("Map Set loop 1M") // <---- Stops the time

// Adding key/value pais to an Object
console.time("Object Set loop 1M")// <---- Starts the timer
const myObject={};
for(let i =0; i < maxCount; i++){
myObject[i]="Test";

} console.timeEnd("Object Set loop 1M") // <---- Stops the time

// getting key/value pairs to a map
console.time("Map Get single value")// <---- Starts the timer
{
    let result=myMap.get(730200);

} console.timeEnd("Map Get single value") // <---- Stops the time

// getting key/value pairs from an object
console.time("Object Get single value")// <---- Starts the timer
{
    let result=myObject[730200];

} console.timeEnd("Object Get single value") // <---- Stops the time

// adding a map entry
console.time("Add a single map entry")// <---- Starts the timer
{
    myMap.set(730200,"New Entry");

} console.timeEnd("Add a single map entry") // <---- Stops the time

// adding an  object entry
console.time("Add a single object entry")// <---- Starts the timer
{
   myObject[730200]="New Entry";

} console.timeEnd("Add a single object entry") // <---- Stops the time

// delete a single map entry
console.time("Deleting a single map entry")// <---- Starts the timer
{
    myMap.delete(730200);

} console.timeEnd("Deleting a single map entry") // <---- Stops the time

// deleting a single object entry
console.time("Deleting a single object entry")// <---- Starts the timer
{
   delete myObject[730200];

} console.timeEnd("Deleting a single object entry") // <---- Stops the time
