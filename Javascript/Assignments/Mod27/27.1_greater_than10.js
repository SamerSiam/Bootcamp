function greaterThan10(num){
    return new Promise ((resolve, reject)=>{
        if (num> 10){
            resolve("Number Greater than 10, Accepted!");
        }
        else{
            reject("Number less than 10, Rejected");
        }
    }).then((resolve)=>{
        console.log(resolve);
    
    }).catch((reject)=>{
        console.log(reject);
    });
    
    
}
greaterThan10(20);
greaterThan10(4);