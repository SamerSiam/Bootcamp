function percentageOfWorld1(pop){
    const worldPopulation= 7900;
    let percentageOfWorldValue=pop/worldPopulation;
    return (percentageOfWorldValue*100).toFixed(2);
}

const percentageOfWorld2= function(pop){
    const worldPopulation= 7900;
    let percentageOfWorldValue=pop/worldPopulation;
    return (percentageOfWorldValue*100).toFixed(2);
}
const ChinaPop=1441;
const USAPop=330;
const IsraelPop=9;
let ChinaPopPercen1, USAPopPercen1, IsraelPopPercen1=0;
let ChinaPopPercen2, USAPopPercen2, IsraelPopPercen2=0;

ChinaPopPercen1= percentageOfWorld1(ChinaPop);
USAPopPercen1=percentageOfWorld1(USAPop);
IsraelPopPercen1=percentageOfWorld1(IsraelPop);

ChinaPopPercen2= percentageOfWorld2(ChinaPop);
USAPopPercen2=percentageOfWorld2(USAPop);
IsraelPopPercen2=percentageOfWorld2(IsraelPop);

console.log (`Percentages of World Population Using Function Declaratins are as follows:\n China: ${ChinaPopPercen1}% \n USA: ${USAPopPercen1}% \n Israel: ${IsraelPopPercen1}%`);
console.log (`Percentages of World Population Using Function Expressions are as follows:\n China: ${ChinaPopPercen2}% \n USA: ${USAPopPercen2}% \n Israel: ${IsraelPopPercen2}%`); 
console.log ("Can you Tell the Difference???") ;          