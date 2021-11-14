const myObject={
    name:'Sam',
    address:'Jerusalem',
    phone:'123456',
    email:'email@trel.com'
};

/** This function loops through the key and value of the original
 * object and then sets the newObject having oppisite keys and values**/

const objectIteration= (obj)=>
{
    const newObject={};
    for (const [key,value] of Object.entries(obj))
    {
        newObject[value]= key;
    }
     
    console.log (newObject);
}
// function call
    objectIteration(myObject);


