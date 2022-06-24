import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import TaskListContextProvider from "../context/TaskListContext";
function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
          <div className="app-wrapper">
          <Header />
            <div className="main">
              
              <TaskForm />
            <TaskList />
            </div>
          </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
