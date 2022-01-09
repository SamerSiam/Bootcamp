
import React ,{useState, useEffect, useRef} from 'react'

import  urlColor from './colorPic.jpg'
import urlBw from './rock.jpg'


const Pics=()=> {

   const imageRef=useRef();
   
  const handleMouseOverHandler=()=>{
    console.log(imageRef.current)
    imageRef.current.src=urlBw
    
   }
    return (
        <div>
             <img ref={imageRef}
                   src={urlColor}
                    onMouseOver={handleMouseOverHandler}
                    width='250px' alt=''/>
        </div>
    )
}

export default Pics
