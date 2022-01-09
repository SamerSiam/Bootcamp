import React ,{useState, useEffect, useRef} from 'react'

function Editing() {
const [showText, setShowText]=useState(false)
const buttonText=useRef('Edit') 
const inputRef=useRef()  
    
 
useEffect(()=>{
    if (showText){
        buttonText.current="Edit"
        inputRef.current.focus()
    }
    else{
        buttonText.current="Save"
    }
},[showText])

const toggleText=()=>{
    setShowText(!showText)
    
   
}

       
   
    return (
        <div>

           <div className="field">{showText && <input ref={inputRef.current}type="text"></input>} </div> 
            <button onClick={e=>toggleText()}>{buttonText.current}</button>
        </div>
    )
}

export default Editing
