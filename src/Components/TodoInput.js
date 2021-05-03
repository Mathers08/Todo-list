import React from 'react';

const TodoInput = (props) => {
  const {item, handleChange, handleSubmit, editItem} = props
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"/>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="What are you want to do?"
            value={item}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={editItem ? 'btn btn-success btn-block mt-3' : 'btn btn-primary btn-block mt-3'}>
            {editItem ? 'Edit Item' : 'Add Item'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoInput
