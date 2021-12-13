import Header from './Header.js';
import Button from './Button.js';
import Card from './Card.js';

import './App.css'
function App() {
return (
    <div>
    <h1 style= {{color:'red'}}>hi </h1>
    <Header title='Task Tracker' />
    <Header title='Another task' />
    <Button style= {{fontWeight:'bold'}}  text='Not Important' />
    <Button  text='Important'/>


    <div className= "card-container">
    <Card imageUrl='https://picsum.photos/460/220'primaryText='Primary Text' 
    secondaryText="Secondary Text" link1="#" link1Text='SHARE' 
    link2="#" link2Text='EXPLORE'/>
    </div>
    
    </div>
    );
    }
    export default App;
