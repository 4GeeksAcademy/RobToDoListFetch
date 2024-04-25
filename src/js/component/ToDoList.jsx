import React, { useState } from "react";
import "../../styles/index.css";
import seam1 from "../../img/seam1.jpg";
import seam2 from "../../img/seam2.jpg";


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

  return ( <div className="">
    <div className=" my-3 container-fluid m-auto d-flex flex-column justify-content-center text-center bg-light rounded-4 position-relative" style={{ maxWidth: "600px", width: "50%", height: "93vh", minWidth: "300px",}}>
    <div><h1> To-do's</h1></div>
  <div id="listTodo" className="my-2 bg-light" style={{ overflowY: "auto", height: "85%" }}>
    <ul className="list-group list-group-flush bg-light">
      <li id="inputLi" className="list-group-item mt-3 d-flex align-items-center bg-light text-center">
        <input
          type="text"
          placeholder="Tasks to be done"
          value={task}
          onChange={handleTask}
          onKeyPress={enterKey}
          className="form-control mx-auto inputWidth rounded-4"
        />
      </li>
      {toDoTask.map((item, index) => (
  <li key={index} className="list-group-item my-2 shadow-sm g-3 rounded-4 d-flex text-start bg-light align-items-center ">
    <div className="d-flex justify-content-between w-100 hidden-icon">
      <label className="text-start">{item}{item.length > 70 ? <br /> : ""}</label>
      <span onClick={() => deleteTask(item)}>
        <i className="fa-solid fa-square-minus text-secondary "></i>
      </span>
    </div>
  </li>
      ))}
    </ul>
  </div>
    <div className="position-absolute bottom-0 start-0 mx-4 mt-5 pt-5 mb-3">
      <h5 id="tasksCount" className="d-block text-start">
        {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks"}
      </h5>
    </div>
</div>
</div>

  );
};
