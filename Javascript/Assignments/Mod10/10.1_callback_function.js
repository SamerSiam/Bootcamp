function isStr (str,callFunc)
{
    if (typeof str==='string')
    {
        callFunc(str);
    }
    else callFunc("Not a String!");
}
function greetingInitials (name, callFunc)
{
    name=name.split(' ');
    if (name.length === 2)
    {
       return callFunc(name);
    }
}
const abbreviate=(str)=>
{
    let first, second, abb='';
    first= str[0].charAt(0).toUpperCase();
    second= str[1].charAt(0).toUpperCase();
    abb=first+ '.' + second;
    return abb;
    
}

// this function uses a call back function which creates dashes between words
function firstWordUpperCase (str,callFunc)
{
    str= str.split(' ');
    let firstWord= str[0].toUpperCase();
    str[0]=firstWord;
    return callFunc(str.join(' '));
}

// create dashes
function createDash(myStr)
{   
    let dashedStr= myStr.split(' ').join('-');
    return dashedStr;
}

const toWeirdCase=(str)=>
{ 
    let WeirdString='';
    for (let i=0; i<str.length;i++)
    {
        if (i%2===0)
        {
            WeirdString= WeirdString.concat(str[i].toUpperCase());
        }
        else{
            WeirdString= WeirdString.concat(str[i].toLowerCase());
        }
        
    }
    return WeirdString.replace( / /g, '' );
}

// prints a string
function print(str)
{
  console.log (str);
}

isStr(1,print);
console.log(firstWordUpperCase ("my name is",createDash));
console.log(firstWordUpperCase ("my name is",toWeirdCase));
console.log(greetingInitials ("John Doe",abbreviate));
