import { useState } from "react"

function DeleteTask(tasks){
    const [delet, setDel]=useState('')
     
      function handleDelete(){
        
        fetch(`http://localhost:9292/tasks/${tasks.id}`,{
          method: "DELETE"
        })}
        
      return(
          <><button onClick={handleDelete}>DELETE</button> </>
      )
}
export default DeleteTask