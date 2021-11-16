const nums=[10,20,5,17, 80, 134, 2456, 13, 80];

// using reduce to find max

const findMax= (numbers)=>
    {
        const maxNumber=numbers.reduce((maxNum, currentval) =>{
        if (currentval> maxNum)return currentval;
        return maxNum;
        
        });
        return maxNumber;
    }
    console.log(findMax(nums));

    // using reduce to find sum of even numbers, used filter first to get even
    const sumOfEven= (numbers)=>
    {
        const evenSum=numbers.filter (n=> n%2===0).reduce((sumOfEven, currentval) =>{
        
        return sumOfEven= sumOfEven+ currentval;
        
        });
        return evenSum;
    }
    console.log(sumOfEven(nums));

// use reduce to find average number in an array
const average= (numbers)=>
    {
        const sum= numbers.reduce((sum, val)=> sum=sum+val);
        const ave= (sum/ numbers.length) || 0;
        return ave;
    }
    console.log(average(nums));