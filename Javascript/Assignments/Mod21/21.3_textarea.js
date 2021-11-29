
const btn=document.querySelector('button');

btn.addEventListener('click', function(){
    const text=document.querySelector('#textarea').value;
    const charsEntered= text.trim();
    console.log(text);
    if (charsEntered.length>=100){
        msg='Thank you for Submission! Success!';
    }
    else{
       msg='text must be 100 chars or more';
      
       
    }
    window.alert(msg);
     
});