import React, { useState } from 'react'
import { todos } from '../reducers/todos.js'
import { useDispatch } from 'react-redux'

// Receives listId as input
export const TodoInput = ({ listID }) => {
  const dispatch = useDispatch()
  // State for input from text box
  const [inputValue, setInputValue] = useState('')
  // Create handle submit function to dispatch addTodo
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // will dispatch the action to save the new todo item here
    dispatch(
      todos.actions.addTodo({
        listID: listID,
        itemInfo: { description: inputValue, done: false }
      })
    )

    // clear the text field
    setInputValue('')
  }

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        className="todo-input-text"
      >
      </input>
      <input
        type="submit"
        className="todo-input-button"
        value="Add Todo"
      >
      </input>
    </form>
  )
}
