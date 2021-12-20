import React from 'react';
import './App.css'
import Button from './Components/Button'
import Checkbox from './Components/Checkbox';

const colors = ['blue','red','yellow'];

    class App extends React.Component{
       

        state={color:'', message:''};

        handleClick= (childData)=> {
            this.setState({message: childData})
            console.log(this.state.message)
        }
        
     
           displayButtons = () => {
            return colors.map((button) => {
            return <Button color={button} onHandleClick = {this.handleClick} />;
            });
          };

        render(){
            return (
            <div> 
                {this.displayButtons()}
                 You clicked on the {this.state.message} button
            </div>
            )
        }
    }
    export default App;
