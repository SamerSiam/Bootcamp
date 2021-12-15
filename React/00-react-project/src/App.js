import React from 'react';
import './App.css'
import Button from './Components/Button'
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
                 
            </div>
            )
        }
    }
    export default App;
