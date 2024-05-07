import React, { useEffect, useState } from "react";
import "../../styles/index.css";



export const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [toDoTask, setToDoTask] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('[]');
  
const user = 'Robert'
const host = 'https://playground.4geeks.com/todo/users/'

const getTodos = async () => {
  const uri = host + user
  const options = { method: 'GET' }

  const response = await fetch(uri, options)
  if (!response.ok) {
    console.log("Error:", response.status, response.statusText);
    return;
  };

  const data = await response.json();
  setTask(data.todos)

};
useEffect(() =>{
  getTodos();
}, [])

return (
  <div>
    <div className=" my-3 container-fluid m-auto d-flex flex-column text-center bg-light rounded-4 position-relative" 
    style={{ maxWidth: "600px", width: "50%", height: "93vh", minWidth: "300px", minHeight: "550px"}}>
    <div><h1 className="my-3"> To-do's</h1></div>
   <div id="listTodo" className=" bg-light mx-auto py-1" 
  style={{ overflowY: "auto", maxHeight: "75%" }}>
    <ul className="list-group list-group-flush bg-light">
    <div><h1 className="my-3"> To-do's</h1></div>
      {task.map((item) => 

      <li key={item.id} className="list-group-item my-2 shadow-sm g-3 rounded-4 
  d-flex text-start bg-light align-items-center "><h1>{item.label}</h1></li>
      )}
    </ul>
    </div>
    </div>
  </div>
)

};
