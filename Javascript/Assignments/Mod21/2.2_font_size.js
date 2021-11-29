const text=document.querySelector('#text');
const plus=document.querySelector('#plusbtn');
const minus=document.querySelector('#minusbtn');

plus.addEventListener('click', function(){
    const maxFont=100;
    const size= parseInt(window.getComputedStyle(text).getPropertyValue('font-size'));
    if (size<=maxFont){
        const newSize= (size+2).toString() +"px";
        text.style.fontSize=newSize;
    }
  
});

minus.addEventListener('click', function(){
    const size= parseInt(window.getComputedStyle(text).getPropertyValue('font-size'));
    const minFont=6;
    if (size>=minFont){
        const newSize= (size-2).toString() +"px";
        text.style.fontSize=newSize;
    }
});