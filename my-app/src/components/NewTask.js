import {useState} from 'react'
import DeleteTask from './DeleteTask'
function NewTask(){
    const [newTask, setNewTask] = useState('')

    
function handleClick(e) {
    e.preventDefault()

    fetch("http://localhost/9292/tasks",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            task_description: newTask
            
        }),
    })
    .then((r)=> r.json())
    .then((newTask)=>{
    })
    
}

{
    return(
        <>
        <form onSubmit={handleClick}>
          <p>Username: <input type='text' name='task[username]'/> </p>
          <p>Category: <input type='text'name='task[category]'/> </p>
          <p>Task: <input type='text' name='task[task_description}'/> </p>
                <input type='submit' value="Submit"/>
        </form>
        
        

        </>
    )
    
}}
export default NewTask