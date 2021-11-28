

//Change the text from “title 2” to “main title”
const startHere= document.querySelector('.start-here');
console.log(startHere);
startHere.textContent="main title";

//Add another sub title with the text “sub title 4”
const subTitle4= document.createElement('li');
subTitle4.innerText="sub title 4";
const subList=document.querySelector('ul ul');
subList.appendChild (subTitle4);

//Delete the last <li> element from the list
const ulChildren= document.querySelector('body ul').children;
const deletedChild=ulChildren[ulChildren.length-1];
console.log(deletedChild);
deletedChild.remove();

//Change the <title> element text to “Master Of The Dom”.
const docTitle= document.querySelector('title');
docTitle.innerText="Master of the DOM";

//Change the text of the <p> element ot something else of your
const pText=document.querySelector('p');
pText.innerText='DOM IS YOUR DESTINY!'