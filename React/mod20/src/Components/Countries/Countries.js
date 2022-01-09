import React, {useState, useEffect} from "react";
import axios from "axios";
 

const Countries=()=>{ 

const [results, setResults]=useState([]);
const [term, setTerm]= useState('');
const [isLoading, setLoading]=useState(false); 

useEffect(()=>{
    console.log("inside useeffect")
    const fetch=async()=>{
    setLoading(true)
    const {data}=await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.com/v2/all')
    setResults(data) ;
    setLoading(false)
    
    };

    if (term && !results.length){
        fetch();
    }
    else{
        const timerId=setTimeout(()=>{ 
        if (term){
            console.log("inside timer")
            fetch();
        }
    },500);
    
   return () =>{
       clearTimeout(timerId);
       console.log("CLEANUP")
   }; 
    }
   
}, [term, results.length]);

const filter = results.filter((item) => {
    return item.name.toLowerCase().startsWith(term.toLowerCase());
  }); 
 

const showCountries=(arr)=>{
   return arr.map(country => 
   
     { return(
        <div key={country.alpha2Code}> 
        <li style={{textAlign: 'center'}}>
        {country.name}
        </li> 
        </div>)}
   
   )};

          
  return (

        <div>
            <div className="ui form"> 
            <div className="field">
                <label> Enter Search Term</label>
                <input
                value={term}
                onChange={e=> setTerm(e.target.value)}
                className="input"/>
            </div>  

            </div>
       
        <div>{isLoading? <div>Loading... </div>: showCountries(filter)}</div>
       
        </div>
    )
          
      
    
};

export default Countries