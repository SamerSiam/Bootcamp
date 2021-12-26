import React from 'react';
import Checkbox from './Components/CheckBox/CheckBox'


const App = () => {
const arr=["one", "two", "three", "four", "five"];


    return <div>
        
       
        <Checkbox checkList={arr}/>
        
    </div>
}



export default App