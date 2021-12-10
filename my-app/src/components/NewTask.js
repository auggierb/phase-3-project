import {useState} from 'react'


function NewTask({tasks,setTasks,handleAddNewTasks}){
    const [newTask, setNewTask] = useState({
        username: '',
        category: '',
        task_description: '',
    })
 
    
function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:9292/tasks",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newTask)
          
    })
    .then((r)=> r.json())
    //.then((newTask)=> handleAddNewTasks(newTask))
    .then((r)=>console.log(r))
    }
    function handleChange(event){
        setNewTask({...newTask, [event.target.id]: event.target.value,
        });
    }


{
    return(
        <>
        <form onSubmit={handleSubmit}>
          <p>Username: <input type='text' id='username' value={newTask.username}onChange={handleChange}/> </p>
          <p>Category: <input type='text' id='category' value={newTask.category} onChange={handleChange}/> </p>
          <p>Task: <input type='text' id='task_description' value={newTask.task_description} onChange={handleChange}/> </p>
                <input type='submit' value="Submit"/>
        </form>
        
        

        </>
    )
    
}}
export default NewTask