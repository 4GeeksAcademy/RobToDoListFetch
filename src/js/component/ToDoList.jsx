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
    <ul>
      {task.map((item) => 

      <li key={item.id} ><h1>{item.label}</h1></li>
      )}
    </ul>
  </div>
)

};