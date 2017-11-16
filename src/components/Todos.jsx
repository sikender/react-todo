import React from 'react'

import Todo from './Todo'

const Todos = props => (
  <div>
    {
      props.todos.map((todo, index) => (
        <Todo
          key={index}
          todoText={todo}
        />
      ))
    }
  </div>
)

export default Todos
