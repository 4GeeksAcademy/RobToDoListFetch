import React, { useState } from "react";
import "../../styles/index.css";

export const ToDoList = () => {
  const [task, setTask] = useState("");
  const [toDoTask, setToDoTask] = useState([]);

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  const enterKey = (event) => {
    event.key === "Enter" && task.trim() !== "" ? (setToDoTask(toDoTask.concat([task])), setTask("")) : null;
  }; 

  const deleteTask = (index) => {
    
    
    setToDoTask(toDoTask.filter((element) => element !== index))
    
  }

  return (
    <div className="container-fluid m-0 d-flex justify-content-center text-center">
    <div>    
      <h1> To-do's</h1>
      <ul className="list-group list-group-flush" style={{ maxWidth: '500px' }}>
        <li className="list-group-item d-flex align-items-center">
          <input type="text" placeholder="Tasks to be done" value={task}
                 onChange={handleTask} onKeyPress={enterKey}
                 className="form-control flex-grow-1" />
        </li>
            {toDoTask.map((item, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
            <span className="flex-grow-1 text-start">{item}</span>
            <span onClick={() => deleteTask(item)}>
  <i className="fa-solid fa-square-minus text-secondary showButton"></i>
</span>
          </li>
        ))}
      </ul>
      <span className="d-flex text-start mx-3">
        {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks" }
      </span>
    </div>

    </div>
  
  );
};