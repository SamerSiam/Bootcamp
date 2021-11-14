let myArray= ["boo", "doooo", "hoo","ro"];

const arrLength= (arr)=>{
let indexArr=[];

for (let i=0; i< arr.length; i++)
{
    indexArr[i]= arr[i].length;
   
}
return indexArr;
}
let myIndex=arrLength(myArray);
console.log(myIndex);