import React from 'react'

import Header from './Header'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Footer from './Footer'

export default class TodoApp extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('todos')
      const todos = JSON.parse(json)
      if (todos) {
        this.setState(() => ({ todos }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos)
      localStorage.setItem('todos', json)
    }
  }

  addTodo = todo => {
    if (todo) {
      this.setState(prevState => ({ todos: prevState.todos.concat(todo) }))
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
        <Footer todosLeft={this.state.todos.length} />
      </div>
    )
  }
}
