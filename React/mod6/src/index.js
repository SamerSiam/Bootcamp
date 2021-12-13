import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import Card from './Card';
import './index.css';
import './App.css'
// import App from './App';

class App extends React.Component{

// use constructor to iniialize state
  constructor (props){
    super(props);
    this.state={lat:null, errorMessage:''};

  window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        //we called setState to update the state object
        this.setState({lat:position.coords.latitude})
      },
      (err)=> {
        this.setState({errorMessage: err.message});
      }
    ); 
  }
  render(){

    // if (this.state.errorMessage && !this.state.lat){
    //   return <div> Error: {this.state.errorMessage} </div>
    // }
    // if (!this.state.errorMessage && this.state.lat){
    //   return <div> Latitude: {this.state.lat} </div>
    // }
   
      return (
      <div> Loading!
      <Button style= {{fontWeight:'bold'}}  text='Not Important' />
      <Button  text='Important'/>
    
    
    <Card imageUrl='https://picsum.photos/460/220'primaryText='Primary Text' 
    secondaryText="Secondary Text" link1="#" link1Text='SHARE' 
    link2="#" link2Text='EXPLORE'/>
    </div>
      )

  }
};

ReactDOM.render(<App />,document.querySelector('#root')); 
 
