import { compose } from "async";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import './Button.css'


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
                <button style={{backgroundColor: this.props.color}} onClick={this.onHandleClick}> </button>
                </div>
                );
        }
    }
    export default Button;