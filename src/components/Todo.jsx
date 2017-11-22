import React from 'react'

const Todo = props => (
  <div>
    <a class="panel-block">
      <input type="checkbox" />
      {props.todoText}
    </a>
  </div>
)

export default Todo
