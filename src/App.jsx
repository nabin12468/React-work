import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header.jsx';
import { Todos } from './MyComponents/Todos.jsx';
import { Footer } from './MyComponents/Footer.jsx';
import AddTodo from "./MyComponents/AddTodo.jsx";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    try {
      initTodo = JSON.parse(localStorage.getItem("todos")) || [];
    } catch (e) {
      initTodo = [];
    }
  }

  const [todos, settodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodos([...todos, myTodo]);
  };

  const onDelete = (todo) => {
    console.log("I am onDelete function", todo);
    settodos(todos.filter((t) => t !== todo));
  };

  return (
    <>
      <Header title="Smart Kishan" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App
