import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from '../Spinner/Spiner'

 

const Algolia=()=>{ 

const [results, setResults]=useState([]);
const [term, setTerm]= useState("hooks");
const [search, setSearch] = useState("hooks");
const [isLoading, setLoading]=useState(false); 
const [errorMsg, setErrorMsg] = useState("");



useEffect(()=>{
   
        const fetch=async()=>{
        setErrorMsg("");
        setLoading(true)
    try{ 
        const {data}=await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${search}`
        ); 
       setResults(data) ;
        setLoading(false);  
        console.log("data is",data) 
    }
    catch (err) {setErrorMsg(err.message)}
        
        
    };
    fetch();
   
}, [search]);


const showItems=()=>{ 
   
    return results.hits && results.hits.map(item => 
   
     { return(
        <div key={item.title}> 
        <li style={{textAlign: 'justified'}}>
        {item.title}
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
        <button onClick={() => setSearch(term)}>Search</button>
       {isLoading? <Spinner/>: showItems()}
         </div> 
      
    )
          
    
};

export default Algolia