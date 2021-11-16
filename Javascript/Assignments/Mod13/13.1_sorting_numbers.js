const numbers = [1, -5, 666, 2, 400, 11];

// sorting in descending order, use slice() not to change original

const descSort=(numArr)=>
{
    return numArr.slice().sort((a,b)=> b-a);
}

// sorting in ascending order, use slice() not to change original

const ascSort=(numArr)=>
{
    return numArr.slice().sort((a,b)=> a-b);
}

console.log (descSort(numbers));
console.log (ascSort(numbers));