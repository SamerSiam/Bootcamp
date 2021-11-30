/** 0- Set starting variables/ rules of the game
    - Random letter selector
    - Array to Store user guesses.
    
*/
const message=document.querySelector('.message');
const keys=document.querySelector('.keysGuessed');
const btn=document.querySelector('button');
const questBox=document.querySelector('.questionBox');
const charString="abcdefghijklmnopqrstuvwxyz";
let randomLetter=getRandomLetter(charString);
let userGuess=[];
console.log(randomLetter);

function startGame()
{   
    randomLetter=getRandomLetter(charString);
    userGuess.length=0;
    message.textContent="Guess a Letter";
    keys.textContent="";
}

function getRandomLetter(str)
{
    const randLetter= str[Math.floor(Math.random()* str.length)];
    return randLetter;
}

// Get user input -- window.eventListener("keypress",e)
//     - verify valid input --use regEx to filter case insensitive alphabet
//         if bad entry, display error message and dont display
//         if accepted entry, jump to 2.
//     - print user input
//         -- if letter already exists, show duplicate entry message and go to 1
//         -- else go to 2  

document.addEventListener('keypress', function(event){
    const userInput= event.key;
    //call verifyInput function to check accepted input
    if(verifyInput(userInput)){
        // keys.textContent+=userInput + ",";

        //check if matches our random char
        if (userInput===randomLetter)
        {
          message.classList.add('green');
          message.textContent="You Won!"
          questBox.textContent=randomLetter;
          keys.textContent="Would you like to play again?";
          btn.classList.add('yes');
        

            // document.removeEventListener(this.event,function());
            // btn.addEventListener('click', startGame());
             return;
    
        }
          // check if letter already exists
        else{ 
                const found = userGuess.indexOf(userInput);
                console.log("found" + found);
            if (found !==-1)
            {
                message.textContent="You entered a duplicate letter";
                message.style.color='red';
            }

            //if not , add it to the userGuess Array
            else{
                    userGuess.push(userInput);
                    message.textContent="Wrong Guess! try again";
                    message.style.color='red';
                    
            }
        }

      
    }  
    
    

    // 2- verify correct input (game rules)
    // - if guess is right, got to step 3
    // - if wrong, show wrong entry message and go to 1
    
});


const verifyInput=(userIn)=>{
    userIn=userIn.toLowerCase();
    if (/^[a-z]/.test(userIn)){
        return true;
    }
    else{
        message.classList.add('red');
        message.textContent="Invalid Input, use only letters";
        
    }
}

