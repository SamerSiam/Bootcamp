
import React from 'react';
import axios from 'axios';
import Button from './Components/Button';
import './App.css'



    class App extends React.Component{
       state={data:'',categories:[]}

       async componentDidMount(){
        const {data}=await axios.get ('https://api.chucknorris.io/jokes/categories')
        this.setState({categories: data});
        console.log(this.state)
       }
       
       LoadJokeDay= async ()=>{  
            const {data}=await axios.get ('https://api.chucknorris.io/jokes/random')
            console.log(data)
            this.setState({data:data.value});
        }

        jokeByCategory= async (cat)=>{  
            const {data}=await axios.get (`https://api.chucknorris.io/jokes/random?category=${cat}`)
            this.setState({data:data.value});   
        }
        
        displayButtons = () => {
            return this.state.categories.map((button) => {
            return <Button text={button} onHandleClick = {this.jokeByCategory} />;
            });
          };
       
        render(){
            return (            
            
            <div> 
               
                <div className='button-container'> 
                    <Button text='Joke of the Day'onHandleClick = {this.LoadJokeDay}/>
                        {this.displayButtons()} 

                        {this.state.data}
                </div>
            </div>
            )
        }
    }
    export default App;
