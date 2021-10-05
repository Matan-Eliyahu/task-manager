import AddTask from './AddTask'
import {useEffect, useState} from 'react'
import uuid from 'react-uuid'
import TasksContainer from './TasksContainer'
import axios from 'axios'

const App = () => {
  var serverIp = "http://localhost:80"

  const [tasksToDo, setTasksToDo] = useState([

  ])

  const [completedTasks, setCompletedTasks] = useState([

  ])

  const getTasks = async () => {
    return await axios.get(serverIp +"/api/tasks").then(res => res.data)
    
  }
  
  const postTask = (newTask) => {
    console.log("Task to add", newTask)
    axios.post(serverIp + "/api/task", newTask)
  }

  const updateTask = (taskId, value) => {
    console.log("TasksId to change", taskId)
    axios.put(serverIp + "/api/tasks/"+ taskId, {
      "Checked": value
    })
  }

  useEffect(() => {
    async function sortTasks() {
      var allTasks = await getTasks()
      var tCompleted = []
      var tToDo = []

      allTasks.map((task) => {
        if (task.Checked) {
          tCompleted.push(task)
        }
        else {
          tToDo.push(task)
        }
      })

      setCompletedTasks(tCompleted)
      setTasksToDo(tToDo)
    }
    sortTasks()
  }, [])

  const onAdd = (text, priority) => {
    var taskId = uuid();
    var newTask = {Text: text, Priority: priority, Checked: false, id: taskId}
    setTasksToDo([...tasksToDo, newTask])
    postTask(newTask)
    console.log("Tasks To Do - ", tasksToDo)
   }

  const moveTask = (task, isChecked) => {
    if (isChecked)
    {
      setCompletedTasks([...completedTasks, task])
      setTasksToDo(tasksToDo.filter(t => t !== task))
      console.log("Tasks To Do - ", tasksToDo)
      updateTask(task.id, isChecked)
    }
    else
    {
      setTasksToDo([...tasksToDo, task])
      setCompletedTasks(completedTasks.filter(t => t !== task))
      console.log("Completed Tasks - ", completedTasks)
      updateTask(task.id, isChecked)
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
