let myName="Samer Siam";
let phoneNumber=0507105551;
let todaysDate= new Date(); // todays date is an instance of the Date object
let isRaining=false;
let teamLeaderName=null;
let teamCoachName; // here teamCoachName is undefined
let mapCode= Symbol('mapCodel');
console.log (mapCode);

console.log("The Type of  " ,myName , "is: "+ typeof(myName));
console.log(`The Type of  ${phoneNumber} is: ` + typeof(phoneNumber));
console.log(`The Type of  ${todaysDate} is: ` + typeof(todaysDate));
console.log(`The Type of  ${isRaining} is: ` + typeof(isRaining));
console.log(`The Type of  ${teamLeaderName} is: ` + typeof(teamLeaderName));
console.log(`The Type of  ${teamCoachName} is: ` + typeof(teamCoachName));
console.log('The Type of ' ,mapCode ,'is: ' , typeof(mapCode));