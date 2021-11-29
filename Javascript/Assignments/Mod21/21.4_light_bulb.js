
const image = document.querySelector('#lightbulbon');
image.addEventListener('click', function()
{
    const srcOn='./on.png';
    const srcOff='./off.jpg';

  if (image.src.match(srcOn)){
    image.src=srcOff;
    
  }else{
    image.src=srcOn;
    }
  });