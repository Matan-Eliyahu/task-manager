const Task = ({task, moveTask, isChecked}) => {
    function OnColor() {
        switch(task.Priority)
        {
            case(1):
            {
                return "lightgreen";
            }
            case(2):
            {
                return "green";
            }
            case(3):
            {
                return "yellow";
            }
            case(4):
            {
                return "darkorange";
            }
            default:
            {
                return "red";
            }
        }
    }
    const handleTask = (e) => {
        isChecked = !isChecked
        moveTask(task, isChecked)
    }
    return (
        <>
            <span className="task-text">{task.text} - </span>
            <span style={{ color: OnColor() }}>{task.priority}</span>
            <input type="checkbox" onChange={handleTask} checked={isChecked}></input>
        </>
    )
}

export default Task
