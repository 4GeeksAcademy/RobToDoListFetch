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
    setToDoTask(toDoTask.filter((element) => element !== index));
  };

  return (
    <div className="container-fluid m-auto d-flex justify-content-center text-center bg-light rounded-4" style={{maxWidth: "600px", height: "800px"}}>
      <div id="listTodo" className="bg-light">    
        <h1> To-do's</h1>
        <ul className="list-group list-group-flush bg-light">
          <li className="list-group-item d-flex align-items-center bg-light text-center">
            <input type="text" placeholder="Tasks to be done" value={task}
                   onChange={handleTask} onKeyPress={enterKey}
                   className="form-control mx-auto inputWidth" />
          </li>
          {toDoTask.map((item, index) => (
            <li key={index} className="list-group-item d-flex text-start bg-light align-items-center hidden-icon">
              <label className=" text-start">{item}</label>
              <span onClick={() => deleteTask(item)}>
                <i className="fa-solid fa-square-minus text-secondary showButton"></i>
              </span>
            </li>
          ))}
        </ul>
        <div className="align-items-end">
        <span id="tasksCount" className="d-block text-start mx-3">
          {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks" }
        </span>
        </div>
      </div>
    </div>
  );
};
