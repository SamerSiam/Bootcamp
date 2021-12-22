
import React from "react";

import './Button.css'


    class Button extends React.Component{
        
        onHandleClick=(event)=>{
            this.props.onHandleClick(event.target.innerText)
                // console.log(event.target.innerText)
             }


        render (){
            return (
                <div>
                <button style={{backgroundColor: this.props.color}} onClick={(e)=>this.onHandleClick(e)}>{this.props.text} </button>
                </div>
                );
        }
    }
    export default Button;