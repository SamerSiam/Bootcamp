import React from "react";
import { render } from "react-dom";

class FavoriteColor extends React.Component{
   
    constructor(props){
        super (props);
        this.state={favColor:'blue'}
        this.message='';
    }
   componentDidMount(){
    this.timer=setInterval(() => {
        // logic inside timer
        this.setState({favColor:'red'})
    }, 1000);
   }
   
   componentDidUpdate(prevState){
    if (this.state.favColor !== prevState.favColor) {
        this.message=`Color has changed to ${this.state.favColor}`;
      }
    }
   
   componentWillUnmount(){
    clearInterval(this.timer)
   }


render(){
    return (
    <div style= {{backgroundColor:this.state.favColor}}>
            <h1> {this.state.favColor}</h1>
            <h2> {this.message}</h2>
    </div>
    );
    
        
    
}

}

export default FavoriteColor;