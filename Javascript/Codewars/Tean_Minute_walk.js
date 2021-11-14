function isValidWalk(walk) {
    //insert brilliant code here
    let north=[], south=[], east=[], west=[];
    if (walk.length===10)
      {
        for (let i=0; i< walk.length; i++)
        {
            if (walk[i]==='n'|| walk[i]==='N')
            {
                north.push (walk[i]);
            }
            else if  (walk[i]==='s' || walk[i]==='S')
            {
                south.push (walk[i] );
            }
            else if  (walk[i]==='e'|| walk[i]==='E')
            {
                east.push (walk[i]);
            }  
            else if  (walk[i]==='w' || walk[i]==='W')
            {
                west.push (walk[i]);
            }  
            
      }
      if ((south.length === north.length) && (west.length === east.length))
      {
          return true;
      }
     
  }
  return false;
}
const testArr= ['n','s','n','s','n','s','n','s','n','s'];
let result = isValidWalk(testArr);
console.log(result);