import React from 'react'

const Todo = props => (
  <div>
    <input type='checkbox' />
    {props.todoText}
  </div>
)

export default Todo
