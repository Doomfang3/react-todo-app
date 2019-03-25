import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = parseInt(event.target.getAttribute("data-id"));
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === target) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange.bind(item.id)}
      />
    ));

    return (
      <>
        <h1 className="title">React Todo App</h1>
        <div className="todo-list">{todoItems}</div>
      </>
    );
  }
}

export default App;
