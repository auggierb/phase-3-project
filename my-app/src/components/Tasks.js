import { useEffect, useState } from "react"
import DeleteTask from "./DeleteTask"

function Tasks({tasks, setTasks}){






return( 
   <>
   <h2>TASKS</h2>
  
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
     </div>

   })}
   <DeleteTask tasks={tasks}/>
   </>
   
 ) }
export default Tasks