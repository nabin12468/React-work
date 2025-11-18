import React, { use, useState } from 'react'

const AddTodo = () => {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const submit = ()=>{
    
  }
  return (
    <div className='container my-3'>
      <h3>Add Your Detail</h3>
      <form onSubmit= {submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Email address</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
          
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="desc" className="form-check-input" id="exampleCheck1" />
          <label className="text" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTodo
