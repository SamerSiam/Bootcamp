intArr=[10, 20,30,35,67,3,8];
strArr=["Hey", "You", "out","there", "in" ];

const doubleValues= intArr.map(function (n){
    return n*2;
});
console.log(doubleValues);
//***************************************************** */
const onlyEvenValues= intArr.map(function(n){
    if(n%2===0) 
    {
        return n ;
    }
    else{
        return 'odd';
    }
});
console.log(onlyEvenValues);

//***************************************************** */
const firstLast=[]; 
let returnString, firstStr, lastStr='';
strArr.forEach(function (str,idx){
if (idx===0)
{
    firstStr=str;
}
if (idx===strArr.length-1)
{
     lastStr=str;
}
    returnString= firstStr+" "+ lastStr;
 });
console.log(returnString);
//***************************************************** */
let vowelStr="I ate an egg for breakfast";
function VowelCount(str)
{  
   str= str.toLowerCase();
   str=str.split('');
   console.log(str); 
   let aCount= oCount = uCount= eCount= iCount=0;
  
   str.forEach(function(v) {
       
    switch (v){
            case('a'):
            aCount++;
            break;

            case('o'):
            oCount++;
            break;

            case('u'):
            uCount++;
            break;

            case('e'):
            eCount++;
            break;

            case('i'):
            iCount++;
   }
   });
   const vowelObjects={
       'a': aCount,
       'o': oCount,
       'e': eCount,
       'i': iCount,
       'u': uCount
   };
return vowelObjects;
}
console.log(VowelCount(vowelStr));

//***************************************************** */
function capitalize(str)
{
    str=str.split('');
    str= str.map(function (c){
        return c.toUpperCase();
    });
    return str.join("");
}
console.log(capitalize("hello dear children"));

//***************************************************** */
function shiftLetter(str)
{
    
}