import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {items, clearList, handleDelete, handleEdit} = props
  return (
    <ul className="list-group">
      <div className="list-group my-5">
        <h3 className="text-center">Todo List</h3>
        {
          items.length
            ? items.map((item, index) => {
              return <TodoItem
                index={index}
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            })
            : <p className="text-center pt-5">There are no todos yet</p>
        }
        <button
          type="button"
          className="btn btn-danger btn-block mt-5"
          onClick={clearList}>
          Clear List
        </button>
      </div>
    </ul>
  )
}

export default TodoList
