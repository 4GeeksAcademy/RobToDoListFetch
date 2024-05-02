import React, { useEffect, useState } from "react";
import "../../styles/index.css";



export const ToDoList = () => {
  const [task, setTask] = useState("");
  const [toDoTask, setToDoTask] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');


  const host = 'https://playground.4geeks.com/todo/'

  const getToDos = async() =>{
    const uri = host + '/todos/';
    const options = {
      method: 'GET'
    };

    const response = await fetch(uri, options)
    if (!response.ok) {
      if (response.status == '404') {
        console.log('bad request 404')
      }
      console.log('Error: ', response.status, response.statusText)
      return
    }
    const data = await response.json 
    setTask.data;
    setUsers.data;
  };

  const handleSelectUser = (event) => {
    setSelectedUser(event.target.value);
  };

  useEffect(() => {
    getToDos()
  }, [])

  const handleTask = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  };

  const enterKey = (event) => {
    
    event.key === "Enter" && task.trim() !== "" ? (setToDoTask(toDoTask.concat([task])), setTask("")) : null;
  }; 

  const deleteTask = (index) => {
    setToDoTask(toDoTask.filter((element) => element !== index));
  };

  return ( <div >
    <div className=" my-3 container-fluid m-auto d-flex flex-column text-center bg-light rounded-4 position-relative" 
    style={{ maxWidth: "600px", width: "50%", height: "93vh", minWidth: "300px", minHeight: "550px"}}>
    <div><h1 className="my-3"> To-do's</h1></div>
      <li className="list-group-item  d-flex align-items-center bg-light text-center">
        <input
          type="text"
          placeholder="Tasks to be done"
          value={task}
          onChange={handleTask}
          onKeyPress={enterKey}
          className="form-control m-auto inputWidth rounded-4"
        />
      </li>
  <div id="listTodo" className=" bg-light mx-auto py-1" 
  style={{ overflowY: "auto", maxHeight: "75%" }}>
    <ul className="list-group list-group-flush bg-light">
      {toDoTask.map((item, index) => (
  <li key={index} className="list-group-item my-2 shadow-sm g-3 rounded-4 
  d-flex text-start bg-light align-items-center ">{item.todos}
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
    <div className="position-absolute bottom-0 start-0 mx-4 mt-5 pt-5 mb-1">
      <h5 id="tasksCount" className="d-block text-start">
        {toDoTask.length === 0 ? "You don't have any pending task" : toDoTask.length + " Pending tasks"}
      </h5>
    </div>
</div>
<select className="form-select" aria-label="Selecciona un usuario" value={selectedUser} onChange={handleSelectUser}>
        <option value="">Selecciona un usuario</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
</div>

  );
};
