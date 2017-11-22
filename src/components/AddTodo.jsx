import React from 'react'

export default class AddTodo extends React.Component {
  addTodo = e => {
    e.preventDefault()

    const todo = e.target.todo.value.trim()
    this.props.addTodo(todo)
    e.target.todo.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input className="input" type='text' name='todo' />
        </form>
      </div>
    )
  }
}
