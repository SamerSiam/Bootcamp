
const checkBtn=document.querySelector('button');
checkBtn.addEventListener('click', function(){
   const age= parseInt(document.getElementById('age').value);
   let msg='';
   if (isNaN(age)){
       msg="You must enter a valid number";
   }
   else{
        age>= 18? msg='Cheers!you can drink': msg='you are too young!';
   }
  window.alert(msg);
   
});