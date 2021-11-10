
const validatePassword1 = (pwd)=>{
let message='';
let password= String(pwd);
console.log (password);
    if (password.length > 7){
        message='Validator 1 -->Strong';
    }
    else message='Validator 1 -->Weak';
    return message;
};

//making the above function with a terinary operator
const validatePassword2 = (pwd)=>{
    let password= String(pwd);
    let message=password.length >7? 'Validator 2 --> Strong':'Validator 2 --> Weak';
    return message;
};

const validatePassword3 = (pwd)=>{
        let password= String(pwd);
        let message='';
        // (variable) && (runTrue(),1) || runFalse();
        password.length >7 && (message='Strong') || (message='Weak');
        return message;
    }

const advancedPassword = (pwd)=>{
    let password= String(pwd);
    let message='';
    message= (password.length >7 && checkUpperCase(password))? 'Very Strong': password.length >7? 'Strong': password.length <7? 'Weak':'invalid';
    return 'Advanced Password:'+ message;
}

const checkUpperCase= (word)=>{
    let input= String (word);
    for (let i=0; i<input.length; i++)
    {
        if (input[i]=== input[i].toUpperCase())
        {
            return true;
        }
    }
    return false;
}

let myMessage= validatePassword1("samer") ;
let myMessage2= validatePassword2("samer123!") ;
let myMessage3= validatePassword2("8jj08hj8hjbbnb;jsdb89nbnaha") ;
let myMessage4= advancedPassword("8jj08hj8hjbbnb;jsdb89nbnaha") ;
console.log (myMessage);
console.log (myMessage2);
console.log (myMessage3);
console.log (myMessage4);