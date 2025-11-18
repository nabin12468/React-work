import React from 'react'
import TodoItem from './TodoItem.jsx';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">Todos List</h3>
      {props.todos && props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        ))
      ) : (
        <p>No todos to display.</p>
      )}
    </div>
  )
}
