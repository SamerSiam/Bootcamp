import React, {useState} from 'react';

const CheckBox=({checkList})=>{

const [checkState, setCheckState ]=useState(checkList)

const [isChecked, setIsChecked] = useState(() => {
    const newChecked = {};
    for (let i of checkState) {
        newChecked[i] = false;
    }
    return newChecked;
});

const handleCheck = (item) => {
    const newChecked = { ...isChecked };
        if (isChecked[item] === true) {
            newChecked[item] = false;
        } else {
            newChecked[item] = true;
        }
        setIsChecked(newChecked);
    };


    const handleReset = () => {
        setCheckState(checkList);
        setIsChecked([]);
    };

    const handleDelete = () => {
        let newArr = [...checkState];
        newArr = newArr.filter((item) => isChecked[item] === false);
        setCheckState(newArr);
        
    }; 

const displayItems=checkState.map((item,index)=>{
    console.log("inside display",item)
   
    return(
       
            <li style={{margin:'20px'}}key={index} className="item">
                <input style={{marginRight:'20px'}}
                    type={"checkbox"}             
                    checked={isChecked[item]}
                    onChange={() => {
                        handleCheck(item);
                    }}
                ></input>
                {item}
            </li>
        );

   

});

  
    return(
 
        <div>
             <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReset}>Reset</button>
            </div>
           {displayItems}
        </div>

    )
};

  

export default CheckBox