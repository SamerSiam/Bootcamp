const populations=[50,10,300,1000];
function populationPercentages(arr)
{
    const worldPopulation= 7900;
    let temp=0;
    let percentages=[];
    for (let i=0;i< arr.length; i++)
    {
        temp=(arr[i]/worldPopulation *100).toFixed(3);
        percentages[i]= temp;
    
    }
    return percentages;
}
let percentagesResult=populationPercentages(populations);
console.log (percentagesResult);