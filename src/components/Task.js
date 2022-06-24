import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({task}) => {
  console.log('ahaaa',task.date.value)
  const {removeTask,findItem}=useContext(TaskListContext)
  return (
    <li className='list-item'>
        <span>{task.title}</span>
        <span>JSON.stringify{task.date.value}</span>
        <div>
          
            <button onClick={()=>removeTask(task.id)} className='btn-delete task-btn'>
                <i className='fas fa-trash-alt'></i>
            </button>
            <button onClick={()=>findItem(task.id)} className='btn-edit task-btn'>
                <i className='fas fa-pen'></i>
            </button>
        </div>
    </li>
  )
}

export default Task