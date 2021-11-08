function dateMethods()
{
  let todaysDate=   new Date();
  let dateFormatted= new Intl.DateTimeFormat('en-GB', {dateStyle:'full', }).format(todaysDate);
  return dateFormatted;
}
let todaysDate= dateMethods();
  console.log ("Today is " +todaysDate);
    

