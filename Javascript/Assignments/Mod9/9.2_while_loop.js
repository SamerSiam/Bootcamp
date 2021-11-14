const populations=[50,10,300,1000];
function populationPercentages(arr)
{
    const worldPopulation= 7900;
    let temp, i=0;
    let percentages=[];
    while (i< arr.length)
    {
        temp=(arr[i]/worldPopulation *100).toFixed(3);
        percentages.push(temp);
        i++;
    }

    return percentages;
}
let percentagesResult=populationPercentages(populations);
console.log (percentagesResult);