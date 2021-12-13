import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

class App extends React.Component{

  constructor (props){
    super(props);
    this.state={counter:0, label:'white'};
    this.incrementClick = this.incrementClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
  }
   
    
  incrementClick (){
    if (this.state.counter < 10 ){
    this.setState({ counter: this.state.counter + 1 })
    }
  }

  decrementClick (){
    if (this.state.counter > -10 ){
      this.setState({ counter: this.state.counter - 1 })
    }
    
  }

  
  
  render(){
      if (this.state.counter >0){
        this.state.label='green'
      }
      else if (this.state.counter < 0){
        this.state.label='red'
      }
      else {this.state.label='black'}
      return (
        
        <div> <button className='button' onClick={this.incrementClick}>
          increment</button> <span/>
         <button className='button' onClick={this.decrementClick}>
          decrement</button>
          <div style= {{color: 'white', backgroundColor:this.state.label}}>{this.state.counter}</div>
        
        </div>
      )
  }
};

ReactDOM.render(<App />,document.querySelector('#root')); 
 
