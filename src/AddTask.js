import {useState} from 'react'
import Button from './Button'
import Select from 'react-select'

const AddTask = ({onAdd}) => {
	const [text, setText] = useState("")
	const [priority, setPriority] = useState("")
	const opt = [
	{label:"1",value:1},
	{label:"2",value:2},
	{label:"3",value:3},
	{label:"4",value:4},
	{label:"5",value:5}]

	const onAddClick = () => {
		if (!text)
		{
			console.log("Please write a task")
			return
		}

		onAdd(text, priority)
		
		setText("")
		setPriority("")
	}

    return (
		<div>
			<label>Your task: </label>
			<input type="text" value={text} placeholder="Your task.." onChange={(e) => setText(e.target.value)}/>
			
			<Select value={priority} placeholder={priority} options={opt} onChange={(e) => setPriority(e.value)}/>
			
			<Button color="green" text="Add" onClick={onAddClick}/>
		</div>
    )
}

export default AddTask
