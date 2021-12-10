import { useEffect, useState } from "react"
import NewTask from './NewTask'

function Tasks({tasks, setTasks, handleAddNewTasks, deleteTask}){
function deleteButton(event){
  fetch(`http://localhost:9292/tasks/${event.target.id}`,{
    method: "DELETE"
  })
  deleteTask(tasks.id)}

  return( 
    <>
    
   
    {tasks.map((task)=>{
      return <div key={task.id}>
        <table>
      
     <tbody>
         <tr><td>{task.id}</td>
             <td>{task.username}</td>
             <td>{task.category}</td>
             <td>{task.task_description}</td>
              
         </tr>
        
     </tbody>
     
        </table>
        <button id={task.id} onClick={deleteButton}>Delete</button>
      </div>
 
    })}

<NewTask   tasks={tasks} setTasks={setTasks}handleAddNewTasks={handleAddNewTasks}/>
 
</>

  )}




export default Tasks