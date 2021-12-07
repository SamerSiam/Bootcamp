const title= document.querySelector('h2');
const joke=document.querySelector('p');

function getJoke(){
    fetch('https://api.jokes.one/jod')
    .then((res)=> res.json())
    .then((data)=>{
        title.textContent= data.contents.jokes[0].joke.title;
        joke.textContent= data.contents.jokes[0].joke.text;
        console.log(data.contents.jokes[0].joke.text);
    })
}

getJoke();