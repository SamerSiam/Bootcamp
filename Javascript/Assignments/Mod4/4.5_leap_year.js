// 
let year= window.prompt('Enter Year');
let leap= leapYear(year);

if (leap===true)
{
    console.log(`Year ${year} is a Leap Year!`);
}
else (console.log (`Year ${year} is not a leap year!`));

function leapYear(year)
{
    let divideBy4, divideby100, divideby400 = false;
    if (year %4 ===0) {
        divideBy4=true;
    }
    if (year %100 ===0)
    {
        divideby100=true;
    }
    if (year %400 ===0)
    {
        divideby400=true;
    }
    // check for multiple conditions
    if((divideBy4 === true) && (divideby100===false)|| (divideby400===true))
    {
        return true;
    }
        else return false;
}