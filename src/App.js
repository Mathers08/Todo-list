import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(false)

  const clearList = () => setTodos([])
  const handleChange = (e) => setTitle(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: uuidv4(),
      title: title,
    }
    setTodos([...todos, newItem])
    setTitle('')
    setEdit(false)
  }
  const handleDelete = (id) => {
    const filteredItems = todos.filter(item => item.id !== id)
    setTodos(filteredItems)
  }
  const handleEdit = (id) => {
    const filteredItems = todos.filter(item => item.id !== id)
    const selectedItems = todos.find(item => item.id === id)
    setTodos(filteredItems)
    debugger
    setTitle(selectedItems.title)
    setEdit(true)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-center">Todo Input</h3>
          <TodoInput
            item={title}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={edit}
          />
          <TodoList
            items={todos}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  )
}
  
export default App
