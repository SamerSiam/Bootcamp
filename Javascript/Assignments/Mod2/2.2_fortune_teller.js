function tellFortune(jobTitle, location, partnerName, numberOfChildren)
{
  let myFortune="You will be a " + jobTitle +" in " + location +" and married to " + partnerName +" with "+ numberOfChildren +" children \n";
  return myFortune;
}

let samerFortune= tellFortune("Programmer", "Jerusalem", "Rinad", 4);
console.log(samerFortune);