import React, {useState, useEffect} from "react";
import axios from "axios";
 
const CancelToken=axios.CancelToken;

const CancelApi=()=>{ 

const [results, setResults]=useState([]);
const [show, setShow]= useState('false');
const [isLoading, setLoading]=useState(false); 

useEffect(()=>{

    console.log("inside useeffect")
    const fetch=async()=>{
    setLoading(true)
    const {data}=await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.com/v2/all')
     setResults(data) ;
    setLoading(false)
    
    };

    fetch();
   
}, []);

const toggleShow=()=>{
    setShow(!show)
}
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
            
        <button>Show</button>           
        <div>{isLoading? <div>Loading... </div>: showCountries(results)}</div>
        </div>
    )
          
      
    
};

export default CancelApi