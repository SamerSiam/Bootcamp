
import React from "react";

import './Button.css'


    class Button extends React.Component{
        
        onHandleClick=()=>{
            this.props.onHandleClick()
             }


        render (){
            return (
                <div>
                <button style={{backgroundColor: this.props.color}} onClick={this.onHandleClick}>{this.props.text} </button>
                </div>
                );
        }
    }
    export default Button;