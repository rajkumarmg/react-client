import React, { useEffect, useState } from "react";
import './App.css';
import { getAllTodo } from './service/Todos.service';
// https://www.figma.com/file/Sma5B8WkvSvbqNLXZiRbAQ/scratch-pad?node-id=0%3A1

function App() {
  const [todo, setTodos] = useState([]);
  useEffect(() => {
    getAllTodo().then(res => setTodos(res.data));
  }, []);

  return (
    <div data-testid="todoList" id="todoList">
      <h1 data-testid="todoTitle">Todo List</h1>
      <ul data-testid="todoView">
        {
          todo ? todo.map(td => (<li data-testid={`todoValue-${td.id}`} key={td.id}>{td.task}</li>)) : {}
        }
      </ul>
      <form data-testid="todoForm">
        <input data-testid="todoValue" type="text"></input>
        <input data-testid="todoSubmit" type="submit"></input>
      </form>
    </div>
  );
}

export default App;
