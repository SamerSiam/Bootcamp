const checkBtn=document.querySelector('button');
const parag= document.querySelector('p');

checkBtn.addEventListener('click', function(){
   const smilies= parseInt(document.getElementById('text').value);
   console.log(smilies);
   for (x=0; x<smilies; x++){
      parag.innerHTML+='&#128513';
   }
   
});