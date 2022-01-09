import React from 'react';
import SimpleToDo from './Components/SimpleToDo/SimpleToDo'

const App = () => {

    const toDo =[
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
        ]

    return <div>
        
        <h1>Simple To Do List</h1>
        <SimpleToDo toDo={toDo}/>
    
    </div>
}



export default App