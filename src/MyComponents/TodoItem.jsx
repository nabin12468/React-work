import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h4 className="card-title">{todo.title}</h4>
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete && onDelete(todo)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
