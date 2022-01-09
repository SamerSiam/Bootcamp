import React, {useState, useEffect} from "react";
import axios from "axios";


 

const ChuckNorris=()=>{ 

const [data, setData]=useState([]);
const [isLoading, setLoading]=useState(false); 
const [errorMsg, setErrorMsg] = useState("");

const cancelTokenSource = axios.CancelToken.source();

useEffect(()=>{
   
        const fetch=async()=>{
        setErrorMsg("");
        setLoading(true)
    try{ 
        const {data}=await axios.get(
            `https://api.chucknorris.io/jokes/categories`,{
                 cancelToken: cancelTokenSource.token
        }); 
        setData(data) ;
        setLoading(false);  
        console.log("data is",data) 
    }
    catch (err) {setErrorMsg(err.message)}
        
        
    };
    fetch();
    return () => {
        cancelTokenSource.cancel() 
      }
}, []);

const showItems=()=>{
    console.log("arr is",data)
       return data.map(item => 
    
      { return(
        <div > 
         <li style={{textAlign: 'center'}}>
         { item}
         </li> 
         </div>)}
    
    )};
          
  return (

       <div>

<div>{isLoading? <div>Loading... </div>:  showItems()}</div>
    
    
         </div> 
      
    )
          
    
};

export default ChuckNorris