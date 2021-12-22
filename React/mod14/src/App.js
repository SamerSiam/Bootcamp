
import React from 'react';
import Input from './Components/Input';
import './App.css'

    class App extends React.Component{
       
       onInputSubmit(value){
           console.log(value);
       }

       
        render(){
            return (            
            
            <div className="ui  container" style={{marginTop:'10px'}}> 
               <Input onSubmit={this.onInputSubmit}/>
            </div>
            )
        }
    }
    export default App;
