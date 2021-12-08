const cardContainer = document.querySelector('.card-container');
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
function fetchData(usr){
    const fetchString="https://api.github.com/users/"+usr;
    fetch(fetchString)
    .then((res)=> res.json())
    .then((res) => displayUser(res))
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

function displayUser(usrData){
    console.log (usrData);
    // user response.ok to check true or false instead of checking
    if(usrData.message ==='Not Found')
    {
        if (window.confirm("User not Found")){
            searchBox.value='';
            searchBox.focus();
        return;
        } 
    }

    console.log (usrData.message);
    const card=document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);

    const image=document.createElement('img');
    const name=document.createElement('div');
    const repoLabel=document.createElement('span')
    const publicRepo=document.createElement('div');

    image.src=usrData.avatar_url;
    name.textContent=usrData.login;
    publicRepo.textContent= usrData.public_repos;
    repoLabel.textContent="Number of Repositories:";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(repoLabel);
    card.appendChild(publicRepo);
    
}
