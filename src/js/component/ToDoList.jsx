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
    <div className="my-3 container-fluid m-auto d-flex justify-content-center text-center bg-light rounded-4 position-relative" style={{ maxWidth: "600px", height: "100vh" }}>
  <div id="listTodo" className="my-3 bg-light">
    <h1> To-do's</h1>
    <ul className="list-group list-group-flush bg-light border-bottom-1">
      <li id="inputLi" className="list-group-item mt-3 d-flex align-items-center bg-light text-center">
        <input
          type="text"
          placeholder="Tasks to be done"
          value={task}
          onChange={handleTask}
          onKeyPress={enterKey}
          className="form-control mx-auto inputWidth"
        />
      </li>
      {toDoTask.map((item, index) => (
        <li key={index} className="list-group-item shadow g-3 d-flex text-start bg-light align-items-center hidden-icon">
          <label className="text-start">{item}{item.length > 70 ? <br /> : ""}</label>
          <span onClick={() => deleteTask(item)}>
            <i className="fa-solid fa-square-minus text-secondary"></i>
          </span>
        </li>
      ))}
    </ul>
    <div className="position-absolute bottom-0 start-0 mx-4 mb-3">
      <h4 id="tasksCount" className="d-block text-start">
        {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks"}
      </h4>
    </div>
  </div>
</div>

  );
};
