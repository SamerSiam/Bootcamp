import React from "react";
import './App.css' 

function Card(props) {
    return (
    <div >
     <img src={props.imageUrl} alt="random image" />
     <h1>{props.primaryText}</h1>
     <h2>{props.secondaryText}</h2>
     <a href={props.link1}>{props.link1Text}</a> <span></span>
     <a href={props.link2}>{props.link2Text}</a>

    </div>
    );
    }
    export default Card;