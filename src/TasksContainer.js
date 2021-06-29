import Task from './Task'

const TasksContainer = ({tasksContainer, moveTask, text, defaultChecked}) => {
    return (
		<div className="tasks-container">
			<p>{tasksContainer.length} {text}</p>
			
			<div className="tasks-container-box" id="tasks_container">
				{tasksContainer.map((task) =>
					<div key={task.Id}>
						<Task task={task} moveTask={moveTask} isChecked={defaultChecked}></Task>
					</div>
				)}
			</div>
		</div>
    )
}

export default TasksContainer
