

let formFields= document.querySelectorAll('form input');
moveFocus(formFields);
pasteValues(formFields);
autoSubmit(formFields);

function moveFocus(inputs)
{
for (let i=0; i< inputs.length;i++){
    inputs[i].addEventListener('change', (event)=>{
        inputs[i+1].focus();
        // you can use input.nextelementsibling
         
    });
}
}

function pasteValues(inputs)
{
    for (let i=0; i< inputs.length;i++){
        inputs[i].addEventListener('paste', (event)=>{
            let paste= (event.clipboardData).getData('text');
            paste=paste.split('');
            for (let k=0; k< paste.length && k+1 < inputs.length; k++)
            {
                 inputs[k].value=paste[k];
            }
            
        });
    }
    }

    function autoSubmit(inputs)
    {  
        let filled=true; 
        let check=true;
        for (let x=0; x< inputs.length; x++)
        {
            inputs[x]>0? filled=true: filled=false;
            check=check && filled;
            console.log(inputs[x].value);
            
        }
        if(check) {
            inputs.form.autoSubmit();
        }
    }
