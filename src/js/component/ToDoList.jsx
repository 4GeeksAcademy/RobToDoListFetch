import React, { useEffect, useState } from "react";
import "../../styles/index.css";



export const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [toDoTask, setToDoTask] = useState();
  const [edit, setEdit] = useState(false);
  const [currentToDo, setCurrentToDo] = useState([])

  const user = 'Robert'
  const host = 'https://playground.4geeks.com/todo/'

  const getTodos = async () => {
    const uri = host + 'users/' + user
    const options = { method: 'GET' }

    const response = await fetch(uri, options)
    if (!response.ok) {
      console.log("Error:", response.status, response.statusText);
      return;
    };

    const data = await response.json();
    setTask(data.todos)

  };

  const createToDo = async () => {
    const uri = host + 'todos/' + user;
    const toDo = { label: toDoTask, is_done: false };

    const options = {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(toDo)
    };

    const response = await fetch(uri, options);

    if (!response.ok) {
      console.log("Ha habido un error", response.status, response.statusText);
      return;
    }

    setToDoTask("");
    getTodos();

  };

  const enterKey = (event) => { event.key === "Enter" ? createToDo() : null };

  const enterEdit = (event) => { event.key === "Enter" ? handleEditToDo() : null };

  const deleteToDo = async (item) => {

    const uri = host + 'todos/' + item.id
    const options = {
      method: 'DELETE'
    }
console.log(uri);

    const response = await fetch(uri, options)
    console.log(response);
    if (!response.ok) {
      console.log("Error", response.status, response.statusText);
      return
    }
    // const data = await response.json();

    getTodos();
  }

  const handleEditToDo = async () => {
    event.preventDefault();
    const dataToSend = {
      label: currentToDo.label,
      is_done: currentToDo.is_done,
    };
    const uri = host + 'todos/' + currentToDo.id;
    const options = {
      method: 'PUT',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json'
      }
    };
    const response = await fetch(uri, options)

    if (!response.ok) {
      console.log("Ha ocurrido un error", response.status, response.statusText);
      return
    }
    // const data = await response.json();
    getTodos();
    setCurrentToDo("");
    setEdit(false);
  };

  const editToDo = (item) => {
    setCurrentToDo(item);
    setEdit(true);
    getTodos();
  }


  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
      <div className=" my-3 container-fluid m-auto d-flex flex-column text-center bg-light rounded-4 position-relative"
        style={{ maxWidth: "600px", width: "50%", height: "93vh", minWidth: "300px", minHeight: "550px" }}>
        <div><h1 className="my-3"> To-do's</h1></div>
        <li className="list-group-item  d-flex align-items-center bg-light text-center">
          {edit ? <input
            type="text"
            placeholder="Edit task"
            value={currentToDo.label}
            className="form-control m-auto inputWidth rounded-4"
            onChange={(event) => setCurrentToDo({ ...currentToDo, label: event.target.value })}
            onKeyPress={enterEdit}

          /> :
            <input
              type="text"
              placeholder="Tasks to be done"
              value={toDoTask}
              className="form-control m-auto inputWidth rounded-4"
              onChange={(event) => setToDoTask(event.target.value)}
              onKeyPress={enterKey}

            />
          }
        </li>

        <div id="listTodo" className="bg-light mx-auto py-1"
          style={{ overflowY: "auto", maxHeight: "75%" }}>
          <ul className="list-group list-group-flush bg-light">

            {task.map((item) =>
              <li key={item.id} className="list-group-item my-2 shadow-sm g-3 rounded-4 
      d-flex text-start bg-light align-items-center listBorder">
                <div className="d-flex justify-content-between w-100 ">
                  <h6>{item.label}</h6>
                  <div className="hidden-icon align-items-center d-flex">
                  <div className="m-1">
                  <span onClick={() => { editToDo(item); setEdit(true) }}>
                    <i className="float-end justify-content-right fa-solid fa-pen-to-square text-secondary "></i>
                  </span>
                  </div>
                  <div className="m-1">
                  <span onClick={() => deleteToDo(item)}>
                    <i className="fa-solid fa-square-minus text-secondary "></i>
                  </span>
                  </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className="position-absolute bottom-0 start-0 mx-4 mt-5 pt-5 mb-1">
          <h5 id="tasksCount" className="d-block text-start">
            {task.length === 0 ? "You don't have any pending task" : task.length + " Pending tasks"}
          </h5>
        </div>
      </div>
    </div>
  )

};
