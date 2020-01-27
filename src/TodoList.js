import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.update = this.update.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  update(id, updateTask) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({
      todos: updateTodos
    })
  }
  render() {
    const todos = this.state.todos.map(item => (
      <Todo
        key={item.id}
        remove={() => this.remove(item.id)}
        task={item.task}
        id={item.id}
        update={this.update}
      />
    ));
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
