import React, { Component } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from "./todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
      this.setState({
          todos: [...this.state.todos, newTodo]
      })
  }

  remove(id) {
      this.setState({
          todos: this.todos.filter(todo => todo.id !== id)
      })
  }

  render() {
    const todos = this.state.todos.map(item => <Todo key={item.id} remove={() => this.remove(item.id)} task={item.task} />);
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
