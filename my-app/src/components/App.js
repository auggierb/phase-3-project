import {useState, useEffect} from 'react'
import User from './User'
import Tasks from './Tasks'
import NewTask from './NewTask'

function App() {
  const[tasks, setTasks]=useState([])
  const [users,setUser]=useState('')
  

  
  useEffect(()=>{
    fetch('http://localhost:9292/tasks')
    .then((r)=> r.json())
    .then((tasks)=> setTasks(tasks))
}, []);
function handleAddNewTask(newTask){
  setTasks([...tasks, newTask])
}
  return (
    
   <>
  <User users={users} setUser={setUser}/>
  <Tasks tasks={tasks} setTasks={setTasks}/>
  <NewTask handleAddNewTask={handleAddNewTask}/>
   </>
  );
}

export default App;
