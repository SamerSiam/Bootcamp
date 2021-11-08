function describeCountry(country,population,capitalCity)
{
  let returnString=null;
  returnString=country + " has "+ population +" people and its capital city is " +capitalCity +"\n";
    return (returnString);
}

let Finland= describeCountry ("Finland", "6 million", "Helsinki");
let Israel= describeCountry ("Israel", "9 million", "Jerusalem");
let USA= describeCountry ("USA", "330 million", "Washington DC");

console.log(Finland);
console.log(Israel);
console.log(USA);

