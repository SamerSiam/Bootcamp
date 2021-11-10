let values=boom (20);

for (let j=1; j<=values.length; j++){
    console.log (values[j]);
}


function boom (number){
    let arrayOfValues=[];

    for (let i=1; i<= number; i++)
    {
          arrayOfValues[i]=i;
          
    }

    for (let k=1; k<= number; k++)
    {
          if ((arrayOfValues[k]%7===0) && (arrayOfValues.includes(7))) {
            arrayOfValues[k]='BOOM-BOOM';
          }
           if (arrayOfValues[k]%7===0)
          {
            arrayOfValues[k]='BOOM';
          }
         
    } 
   
    return arrayOfValues;
}