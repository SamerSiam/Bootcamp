

const language= (lang) =>{
    let msg='';
    switch (lang) {
        case ('mandarin'):
            msg= ("MOST number of native speakers");
            break;
        case ('spanish'):
            msg= ("2nd place in number of native speakers");
            break;
        case ('english'):
            msg= ("3rd place in number of native speakers");
            break;
        case ('hindi'):
           msg= ("4th place in number of native speakers");
            break;
        case ('arabic'):
            msg= ("5th most spoken language");
            break;
        default:
            msg= ("Not in the top 5");
            
    }
    return msg;
}

let langInput= window.prompt ('Enter your desired Language');
let caseInsensitive= langInput.toLowerCase();
let message=language(caseInsensitive);
window.alert(message);