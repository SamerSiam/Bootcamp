
const words = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgers"];
const chars=[];

// user for of to iterate over the array
for (let word of words )
{   
    for (let char of word)
    {
        if (char !=' '){
            chars.push(char.toLowerCase());
        }
        
    }
    
}
//get a sorted array of all chars in the array
chars.sort();
console.log (chars);
//create a new empty object
const letterObj={};

//loop through the chars array to count instances of each char
let count=1;
for(let i=0; i< chars.length;i++)
{   
    // let count=1;
    if (chars[i+1]===chars[i])
    {   
        count++;

    }
    else {
          letterObj[chars[i]] =count;
          count=1;
    }
    
    
}
console.log(letterObj);