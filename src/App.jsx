import React, { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header.jsx';
import { Todos } from './MyComponents/Todos.jsx';
import { Footer } from './MyComponents/Footer.jsx';
import AddTodo from "./MyComponents/AddTodo.jsx"

function App() {
  const [todos, settodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy groceries"
    },
    {
      sno: 2,
      title: "Go to the mall ",
      desc: "You need to go to the market to buy groceries"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to buy groceries"
    },



  ]);

  const onDelete = (todo) => {
    console.log("I am onDelete function", todo);
    settodos(todos.filter((t) => t !== todo));
  };

  return (
    <>
      <Header title="Smart Kishan" searchBar={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App
