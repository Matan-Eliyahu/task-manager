import AddTask from './AddTask'
import {useState} from 'react'
import uuid from 'react-uuid'
import TasksContainer from './TasksContainer'

const App = () => {
  const [tasksToDo, setTasksToDo] = useState([

  ])

  const [completedTasks, setCompletedTasks] = useState([

  ])

  const onAdd = (text, priority) => {
    var taskId = uuid();
    var newTask = {Text: text, Priority: priority, Id: taskId}
    setTasksToDo([...tasksToDo, newTask])
    console.log("Tasks To Do - ", tasksToDo)
   }

  const moveTask = (task, isChecked) => {
    if (isChecked)
    {
      setCompletedTasks([...completedTasks, task])
      setTasksToDo(tasksToDo.filter(t => t !== task))
      console.log("Tasks To Do - ", tasksToDo)
    }
    else
    {
      setTasksToDo([...tasksToDo, task])
      setCompletedTasks(completedTasks.filter(t => t !== task))
      console.log("Completed Tasks - ", completedTasks)
    }
  }

  return (
    <div className="center">
      <h1>Welcome</h1>
      <h2>Organize Your Tasks</h2>
      <AddTask onAdd={onAdd}/>
      <div className="containers">
        <TasksContainer tasksContainer={tasksToDo} moveTask={moveTask} text="Tasks To Do" defaultChecked={false}/>
        <TasksContainer tasksContainer={completedTasks} moveTask={moveTask} text="Completed Tasks" defaultChecked={true}/>
      </div>
    </div>
  )
}

export default App
