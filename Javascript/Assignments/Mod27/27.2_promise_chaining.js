const arr1=["Yitav", "Stas", "Shmuel", "Aviya","Samer","Niv"];
const arr2=["Yitav", "Stas", "Shmuel", "Aviya","Samer","Niv",123];
stringChain(arr1);
stringChain(arr2);

// the main function that calls the other functions
function stringChain(arr){
    let strArr=[];
    let notString=0;
    //promise checks if an array contains non strings
    return new Promise ((resolve, reject)=>{
       
        arr.forEach(element => {
            if (typeof element !== 'string')
            {
                notString+=1;
            }
        });
        // if non strings found, reject and exit the function
            if (notString >0){
                reject("Error! one or more elements are NOT String");
            }
            // if all are strings, then call the makeAllCaps function
            else{
                resolve (makeAllCaps(arr));
                    
            }

            // once we get a result from the resolve, call the sortAsc function to sort the array
    }).then((resolve)=>{

        return sortAsc(resolve);
        
      console.log(`The Sorted Array looks like this: ${sortAsc(resolve)}`);
    
    }).then (function (result){
        console.log(result);
    })
    
    .catch((reject)=>{
        console.log(reject);
    });
}

function makeAllCaps(strArr){
    const retArr= strArr.map((str=> str.toUpperCase()));
    return retArr;
}

function sortAsc(strArr){

   strArr.sort(function (a,b){
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
}); 
  
    return strArr;
}