import React from 'react';

const TodoItem = (props) => {
  const {index, title, handleDelete, handleEdit} = props
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <strong className="text-dark">{index + 1}. {title}</strong>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <i className="fas fa-pen btn btn-success" onClick={handleEdit}/>
        </span>
        <span className="mx-2 text-danger">
          <i className="fas fa-trash btn btn-danger" onClick={handleDelete}/>
        </span>
      </div>
    </li>
  )
}

export default TodoItem
