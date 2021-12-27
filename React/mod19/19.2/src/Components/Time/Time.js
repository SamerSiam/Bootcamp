import React, {useState} from 'react';

const Time=({seconds, minutes, hours})=>{

const [timeSec, setSeconds ]=useState(seconds)
const [timeMin, setMinutes ]=useState(minutes)
const [timeHours, setHours ]=useState(hours)

const handleUpdateSec = ({ target: { value: secs } }) =>{
        setSeconds(secs);
        setMinutes(secs / 60);
        setHours(secs / 3600);
    };

const handleUpdateMinutes = ({ target: { value: mins } }) =>{
        setMinutes(mins);
        setSeconds(mins * 60);
        setHours(mins / 60);
    };

const handleUpdateHours = ({ target: { value: hrs } }) =>{
    setHours(hrs);
    setMinutes(hrs * 60);
    setSeconds(hrs * 3600);
};

    return(
        
       <div>
           <label> Seconds</label>
           <input type="number" value={timeSec}
           onChange={handleUpdateSec}/>

           <label> Minutes</label>
           <input type="number"value={timeMin}
           onChange={handleUpdateMinutes}/>

           <label> Hours</label>
           <input type="number"value={timeHours}
           onChange={handleUpdateHours}/>
           </div>
        
    );

  
    };

export default Time