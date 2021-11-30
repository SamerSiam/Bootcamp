    const check=document.querySelector('#show');
    const image=document.querySelector('.mypic');
    console.log(check);

    check.addEventListener('input', function()
    {
        if (check.checked===true)
        {
        image.classList.remove('image')
        image.classList.add('show');
        }
        else{
            image.classList.add('image');
            image.classList.remove('show')
        }
    });
    