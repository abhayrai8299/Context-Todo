
import React,{createContext,useState,useEffect} from 'react'
import {v4 as uuid} from 'uuid';
export const TaskListContext=createContext();

var CircularJSON = require('circular-json');
const TaskListContextProvider=(props)=>{

  const initialState=JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks,setTasks]=useState(initialState);
  
  const [editItem,setEditItem]=useState(null);


useEffect(()=>{
  localStorage.setItem("tasks",CircularJSON.stringify(tasks));
},[tasks]);

  const addTask=(title,date)=>{
    console.log(date);
    setTasks([...tasks,{title,id:uuid(),date}]);

  };
  const removeTask=id=>{
    setTasks(tasks.filter(task=>task.id !==id));
  }
  const clearList=()=>{
    setTasks([]);
  }
  const findItem=id=>{
     const item=tasks.find(task=>task.id===id)
     setEditItem(item);
  }
  const editTask=(title,id)=>{
    const newTasks=tasks.map(task=>(
      task.id===id?{title,id}:task
    ));
    setTasks(newTasks);
    setEditItem(null);
  }


  return (
     <TaskListContext.Provider value={{tasks,addTask,removeTask,clearList,findItem,editTask,editItem,}}>
      {props.children}
     </TaskListContext.Provider>
  )
}
export default TaskListContextProvider;