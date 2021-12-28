import React, {useState, useEffect} from "react";
import axios from "axios";

const Fetch=()=>{ 

const [results, setResults]=useState([]);
console.log(results)

useEffect(()=>{

    const fetch=async()=>{
    const data=await axios.get('https://swapi.dev/api/films/1')

    setResults(data) ;
    console.log("data is",data)
    };
    
    fetch();
}, []);



    return (

        <div>
           {results && results.data.title}
        </div>  

            
    )
};

export default Fetch