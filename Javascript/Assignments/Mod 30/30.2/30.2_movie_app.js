const movieContainer = document.querySelector('.movie-container');
const movieDescription = document.querySelector('.description');
const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('button');

// clicking the search button
searchBtn.addEventListener('click',()=>{
    getInput();
})

// on using enter key on the input field
searchBox.addEventListener('keyup',(e)=>{
    if (e.keyCode===13){
        getInput();
    }
})

function fetchData(title){
    const key='807a98f2';
    const apiUrl=`http://www.omdbapi.com/?t=${title}&apikey=${key}`;
    fetch(apiUrl)
    .then((res)=> res.json())
    .then((res) => displayMovie(res))
    .catch((error)=> console.log("Error fetching API", error))
    
}

function getInput(){
    const userInput=searchBox.value;
       if (userInput.length>0)
       {
           fetchData(userInput);
       }
           console.log(userInput);
   }

   function displayMovie(movieObj){
    console.log (movieObj);
    if(movieObj.Response ==='False')
    {
        if (window.confirm(`" ${searchBox.value}" Movie not Found`)){
            searchBox.value='';
            searchBox.focus();
            return;
        } 
        
    }
        else{
            //poster
             const posterImage=document.createElement('img');
             posterImage.src=movieObj.Poster;
             posterImage.classList.add('poster');
             movieContainer.appendChild(posterImage);
             //title
             const title=document.createElement('div');
             title.innerHTML="Title:" + movieObj.Title;
             title.classList.add('title');
             movieDescription.appendChild(title);
             //Genre
             const genre=document.createElement('div');
             genre.innerHTML="Genre:" + movieObj.Genre;
             genre.classList.add('sub-title');
             movieDescription.appendChild(genre);

             //year
             const year=document.createElement('div');
             year.innerHTML="Year:" + movieObj.Year;
             year.classList.add('sub-title');
             movieDescription.appendChild(year);
           

             //plot
             const plot=document.createElement('div');
             plot.innerHTML="Plot:" + movieObj.Plot;
             plot.classList.add('sub-title');
             movieDescription.appendChild(plot);
             

             //Director
             const director=document.createElement('div');
             director.innerHTML="Director:" + movieObj.Director;
             director.classList.add('sub-title');
             movieDescription.appendChild(director);
             

             //Actors
             const actors=document.createElement('div');
             actors.innerHTML="Actors:" + movieObj.Actors;
             actors.classList.add('sub-title');
             movieDescription.appendChild(actors);
             

             //Ratings imdb
             const ratings=document.createElement('div');
             ratings.innerHTML="Imdb Rating:" + movieObj.imdbRating;
             ratings.classList.add('sub-title');
             movieDescription.appendChild(ratings);
             console.log(ratings);

            //  //Ratings RT
            //  const ratingsRt=document.createElement('div');
            //  ratings.innerHTML="Imdb Rating:" + movieObj.Ratings[0];
            //  ratings.classList.add('sub-title');
            //  movieDescription.appendChild(ratings);
            //  console.log(ratings);

            }
   }
