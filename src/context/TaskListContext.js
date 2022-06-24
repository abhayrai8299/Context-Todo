
import React,{createContext,useState,useEffect} from 'react'
import {v4 as uuid} from 'uuid';
import dayjs from 'dayjs';
export const TaskListContext=createContext();
const TaskListContextProvider=(props)=>{
  const initialState=JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks,setTasks]=useState(initialState);
  const [exist,setExist]=useState(null)
  const [editItem,setEditItem]=useState(null);


useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);

  const addTask=(title,date)=>{
    setTasks([...tasks,{title,id:uuid(),date}]);

  };
  const removeTask=id=>{
    setTasks(tasks.filter(task=>task.id !==id));
  }
  const clearList=()=>{
    setTasks([]);
  }
  const findTime=time=>{
    console.log("time" ,time);
    console.log("Check" ,dayjs(tasks.date).format('HH:mm:ss A'));
   const check=tasks.find(task=>dayjs(task.date).format('HH:mm:ss A')===time)
   setExist(check)
   console.log("Context" ,check);
  }

  const findItem=id=>{
     const item=tasks.find(task=>task.id===id)
     console.log(item)
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
     <TaskListContext.Provider value={{tasks,addTask,removeTask,clearList,findItem,editTask,editItem,exist,findTime}}>
      {props.children}
     </TaskListContext.Provider>
  )
}
export default TaskListContextProvider;