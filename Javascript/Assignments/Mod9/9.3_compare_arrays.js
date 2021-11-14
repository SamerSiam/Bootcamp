const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function compareArr(arr1,arr2)
{
    const resultArr=[];
    for (let i=0; i< arr1.length; i++)
    {
        for (let j=0; j< arr2.length; j++)
        {
            if (arr1[i].toLowerCase()===arr2[j].toLowerCase())
            {
                resultArr.push(arr1[i]);
            }
        }
    }
    if (resultArr.length>0)
    {
        return resultArr;
    }
    return -1;
}
console.log(compareArr(food, food1));