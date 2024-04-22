import React, { useState } from "react";
import "../../styles/index.css";

export const ToDoList = () => {
  const [task, setTask] = useState("");
  const [toDoTask, setToDoTask] = useState([]);

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  const enterKey = (event) => {
    event.key === "Enter" ? (setToDoTask(toDoTask.concat([task])), setTask("")) : null;
  }; 

  const deleteTask = (index) => {
    
    const finishedTask = [toDoTask];
    finishedTask.splice(index, 1);
    setToDoTask(finishedTask);
  };

  

  return (
    <div class="container-fluid m-0 d-flex justify-content-center text-center">
    <div>    
      <h1> To-do's</h1>
      <ul class="list-group list-group-flush" style="max-width: 500px;">
        <li class="list-group-item d-flex align-items-center">
          <input type="text" placeholder="Tasks to be done" value={task}
                 onChange={handleTask} onKeyPress={enterKey}
                 class="form-control flex-grow-1" />
        </li>
            {toDoTask.map((item, index) => (
            <li key={index} class="list-group-item d-flex align-items-center">
            <span class="flex-grow-1 text-start">{item}</span>
            <a href="#"><i class="fa-solid fa-square-minus text-secondary hideTask viewTask" onClick={deleteTask}></i></a>
          </li>
        ))}
      </ul>
      <span class="d-flex text-start mx-3">
        {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks" }
      </span>
    </div>
  </div>
  
  );
};
