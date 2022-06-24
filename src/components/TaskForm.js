import React, { useContext,useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const {addTask,clearList,editItem,editTask} = useContext(TaskListContext);
 const [title,setTitle]=useState("");
 const [date,setDate]=useState(new Date());
 console.log(date);
 const handleChange=e=>{
    e.preventDefault()
    setTitle(e.target.value);


  };
  const handleSubmit=e=>{
    e.preventDefault();
    if(editItem===null)
    {
        addTask(title,date);

    setTitle("")
    } else{
        editTask(title,editItem.id,editItem.Date);
    }
  };
  useEffect(()=>{
    if(editItem!==null){
        setTitle(editItem.title)
    }
        else{
            setTitle("")
        }
  },[editItem])
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add a Task..!"
        required
      ></input>
      <DateTimePickerComponent onChange={date => setDate(date)}  ></DateTimePickerComponent>
      {/* <DatePicker
      selected={date} 
      className="task-input"
      dateFormat="dd/MM/yyyy"
      onChange={date => setDate(date)} 
    /> */}
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
        {editItem?'Edit Task':"Add Task"}
        </button>
        <button onClick={clearList} className="btn clear-btn">Clear</button>
      </div>
    </form>
   
  );
  
};


export default TaskForm;
