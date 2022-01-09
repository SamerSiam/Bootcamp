import React, {useState} from 'react';
import './SimpleToDo.css'

const SimpleToDo=({toDo})=>{

const [taskStatus, checkTask ]=useState(toDo)

const handleCheck = (index) => {
    const tempList = [...taskStatus];
    tempList[index].completed = !tempList[index].completed;
    checkTask(tempList);
};
 

const displayItems=taskStatus.map((item,index)=>{
    const status=item.completed? 'complete' : 'open';
    return(
        
       
        <div key={item.name}>
          <div className={status}>{item.name}
          <input 
          type="checkbox" 
          checked={item.completed? true:false}
          onChange={() => handleCheck(index)}>

          </input>
          </div>
        </div>

       

    );
});
  
    return(
 
        <div>
           {displayItems}
        </div>

    )
};

export default SimpleToDo