import {useState, useEffect} from 'react'

import Tasks from './Tasks'


function App() {
  const[tasks, setTasks]=useState([])

  function handleAddNewTask(newTask){
    setTasks([...tasks, newTask])
  }
  function deleteTask(id){
    const updatedList = tasks.filter((task)=> task.id !== id)
    setTasks(updatedList)
  }
  
  useEffect(()=>{
    fetch('http://localhost:9292/tasks')
    .then((r)=> r.json())
    .then((tasks)=> setTasks(tasks))
}, []);

  return (
    
   <>
 
  <Tasks tasks={tasks}setTasks={setTasks} handleAddNewTask={handleAddNewTask} deleteTask={deleteTask}/>

   </>
  );
}

export default App;
   