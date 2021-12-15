import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'


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

    if (this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat){
      return <div> Latitude: {this.state.lat} </div>
    }
   
      return <div> Loading!</div>
    

  }
};

export default App;
 
