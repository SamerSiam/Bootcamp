let testArray=new Array (2,4,6,8,10,5,3,10);

Array.prototype.Myfilter=function(value){
    let returnArray=[];
    for (let x=0; x<this.length; x++)
    {
        if(this[x]===value)
        {
            returnArray.push(value);
        }
    }
    return returnArray;
}

Array.prototype.Myfind=function(value){
    let found=null;
    for (let x=0; x<this.length; x++)
    {
        if(this[x]===value)
        {
            found=this[x];
            return found;
        }
    }
    return returnArray;
}

console.log(testArray.Myfilter(10));
console.log(testArray.Myfind(10));