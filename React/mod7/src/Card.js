import { render } from "ejs";
import React from "react";
import './App.css' 

    class Card extends React.Component{
        constructor(props){
            super(props)
        };
    
    render (){
        return (
            <div >
             <img src={this.props.imageUrl} alt="random image" />
             <h1>{this.props.primaryText}</h1>
             <h2>{this.props.secondaryText}</h2>
             <a href={this.props.link1}>{this.props.link1Text}</a> <span></span>
             <a href={this.props.link2}>{this.props.link2Text}</a>
        
            </div>
            );
    }
}
    export default Card;