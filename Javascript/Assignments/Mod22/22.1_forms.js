const myForm= document.querySelector('form');
const userName=document.querySelector('#name');
const userAge=document.querySelector('#age');
const userEmail=document.querySelector('#email');
const result=document.querySelector('#message');

myForm.addEventListener('submit', function(e){
e.preventDefault();
const msg=`Thank you ${userName.value} for entering your age: ${userAge.value} and your email address: ${userEmail.value} if this info is accurate, press OK to proceed or Cancel to return back to the form`;
// result.textContent=msg;
window.confirm(msg);

});