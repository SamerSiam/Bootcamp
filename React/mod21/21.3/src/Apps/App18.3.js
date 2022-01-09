import React from 'react';
import Time from './Components/Time/Time'


const App = () => {
const seconds=60;
const minutes=100;
const hours=1;
    

    return <div>
        
        <h1>What's the Time</h1>
        <Time seconds={seconds} minutes={minutes} hours={hours}/>
    
    </div>
}



export default App