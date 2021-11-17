// used debugger in VS code

function getSum(arr1, arr2){
    let sum = 0;          // use let instaead of const to be able to manipulate it
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3],[5,66,23]); // add ',' between 2 arrays
