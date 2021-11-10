const arr=[1,7,3,0,-5,7,3,9];

//call arrayLength function
let arLength=arrayLength(arr);
printAr (arr,arLength);
console.log ("Array length =" , arLength);

let sum=arrSum(arr,arLength);
console.log ("Array Sum =" , sum);

let prod=arrMulti(arr,arLength);
console.log ("Array Product =" , prod);

// this loop prints the contents of the array
function printAr (a,size) {
    for (let i=0; i<size; i++)
    {
        console.log (`Number at index ${i} is ${arr[i]}`);
    }
}


// this function calculates the length of an array
function arrayLength(a)
{
    let len=0;
    for (let i=0; a[i]!=null; i++)
    {
        len=len+1;
    }
    return len;
}

function arrSum(a,size)
{
    let sum=0;
    for (let i=0;i<size; i++)
    {
        sum=sum + a[i];
    }
    return sum;
}

function arrMulti(a,size)
{
    let product=1;
    for (let i=0;i<size; i++)
    {
        product=product * a[i];
    }
    return product;
}