import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Title or Description cannot be blank");
      return;
    }
    addTodo(title.trim(), desc.trim());
    setTitle("");
    setDesc("");
  }

  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Todo title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            rows="3"
            placeholder="Todo description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
