import React, { Component } from "react";
import './Box.css'
import Spinner from "./Spinner";

class Box extends Component{

    constructor(props){
        super (props);
        this.state={start:false}
    }

    componentDidMount(){
        this.timer=setInterval(() => {
            this.setState({start:true})
        }, 3000);
       }
      
       componentWillUnmount(){
        clearInterval(this.timer)
        this.setState({start:false})
       }

    render(){
        clearInterval(this.timer);
        console.log("start=", this.state.start)
        if (this.state.start===true)
        {
            return (<div className="Box"> </div> );
        
        }
        else{return (<div className="hidden"> </div>  );}
        
       
    }
}

export default Box;