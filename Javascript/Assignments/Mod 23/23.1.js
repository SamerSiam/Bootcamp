/** Question 1:
In your own words what will this point to and why?(Note
this is the global scope)**/

console.log(this); //-- prints the window Object

const myObj = {
    name: "Timmy",
    greet () {
    console.log(`Hello ${this.name}`);
    },
    }; myObj.greet();
   

const el = document.getElementById('home');

el.addEventListener('click', () =>{
  console.log(this); // true
});

        