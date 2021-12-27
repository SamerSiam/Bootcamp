import React, {useState} from 'react';

const ShowText=({text,maxLen})=>{

const [hideText, setShowHide]=useState(false)

    const onTextClick=()=>{
        setShowHide(!hideText);
        
    }

    const textEnd=hideText?'Show More':'Show Less'
    return(

        <div>

            <p>
                {hideText? text.slice(0,maxLen): text}
                
               <span style={{color:'blue', fontWeight:'bold'}} onClick={()=>onTextClick()}> {textEnd} </span>
            </p>
        </div>

    )
}

export default ShowText