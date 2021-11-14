const myCountry={
 country: "Spain",
 capital:"Madrid",
 language:"Spanish",
 population:"100",
 neighbours: ["Portugal","France","Morocco"],
describe: function(){
    let message= `${this.country} has ${this.population}, their mother tongue is ${this.language}, and Capital city is ${this.capital}`;
    return (message);
    }
};
let describeCountry= myCountry.describe();
console.log (describeCountry);
const isIsland= (country)=>
{   
    country.neighbours===0? country['isIsland']=true : country['isIsland']=false; 
    console.log ("After adding isIsland:, ", country);
}
isIsland (myCountry);
