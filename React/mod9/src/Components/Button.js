import { compose } from "async";
import React from "react";
import { Component } from "react/cjs/react.production.min";

// function Button(props) {
//     return (
//     <div>
//     <button > {props.text} </button>
//     </div>
//     );
//     }

    class Button extends React.Component{
        constructor(props){
            super(props)
        };
        render (){
            return (
                <div>
                <button > {this.props.text} </button>
                </div>
                );
        }
    }
    export default Button;