
const stepShape='#';
step (10);

function step(n)
{
    for (let i=0; i< n; i++)
    {
        let step='';
        for (let j=0; j<n; j++)
            {
                if (j<=i)
                {
                    step= step+stepShape;
                }
                else{
                    step= step+ ' ';
                }
                
            }
            console.log(step);
     
    }
}