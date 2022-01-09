import React , {useState} from 'react';
import './App.css'
import ChuckNorris from './Components/ChuckNorris/ChuckNorris';


const App = () => {

const [show, setShow]=useState(false);


    return (

        <div className="App">
        <button onClick={()=>setShow(!show)}>Show/Hide</button>
        <div> {show && <ChuckNorris/> }</div>
      
        </div>
      

    )
   
       
       
        
   
}



export default App