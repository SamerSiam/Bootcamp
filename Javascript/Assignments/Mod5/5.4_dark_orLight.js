
const color= (col) =>{
    let msg='';
    switch (col) {
        case ('yellow'): 
        case ('pink'):
        case ('orange'):
        msg= ("light color");
        break;
        case ('blue'):purple
                msg= ("dark color");

        case ('purple'):
                msg= ("dark color");

         case ('brown'):
                msg= ("dark color");
                break;
        default:
            msg= ("Unknown Color");
            
    }
    return msg;
};

let colorInput= window.prompt ('Enter your favorite Color');
let caseInsensitive= colorInput.toLowerCase();
let message=color(caseInsensitive);
window.alert(message);