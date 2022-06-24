import React, { useContext,useState,useEffect } from "react";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import { TaskListContext } from "../context/TaskListContext";
import dayjs from 'dayjs';

const TaskForm = () => {
  const {addTask,clearList,editItem,editTask,findTime,exist} = useContext(TaskListContext);
 const [title,setTitle]=useState("");
 const [date,setDate]=useState("");
 console.log('Yee!', date)
 const time= dayjs(date).format('HH:mm:ss A');
 console.log("UserTime:",time)
  
 const handleChange=e=>{
    e.preventDefault()
    setTitle(e.target.value);


  };
  const handleSubmit=e=>{
    e.preventDefault();
   
    findTime(time)
    if(exist)
    {
      alert("Already task is pending on the timestamp.")
    }
    else if(!exist)
    {
     if(editItem===null)
    {
        addTask(title,date);

    setTitle("")
    } else{
        editTask(title,editItem.id,editItem.date);
    }
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
      <DateTimePickerComponent onChange={date => setDate( dayjs(date.value.toString()).format('DD/MM/YYYY  HH:mm:ss A '))}  ></DateTimePickerComponent>
      {/* <DatePicker
      selected={date} 
      className="task-input"
      dateFormat="dd/MM/yyyy"
      onChange={date => setDate(date)} 
    /> */}
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
        {editItem?'Edit Task':"Add Task" }
        </button>
        <button onClick={clearList} className="btn clear-btn">Clear</button>
      </div>
    </form>
   
  );
  
};


export default TaskForm;
