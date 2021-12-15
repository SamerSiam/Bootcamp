import { compose } from "async";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import './Button.css'

// function Button(props) {
//     return (
//     <div>
//     <button onClick={this.onClick}> {props.buttonColor} </button>
//     </div>
//     );
//     }

    class Button extends React.Component{
        constructor(props){
            super(props)
        };
        onHandleClick=()=>{
       this.props.onHandleClick(this.props.color)
        }


        render (){
            return (
                <div>
                <button onClick={this.onHandleClick}>{this.props.color} </button>
                </div>
                );
        }
    }
    export default Button;