import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./components/Todo.css";

const todo = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleAdd = (name) => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem],
    });
  };

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggle={this.handleToggle} todo={this.state.todo} />
        <TodoForm handleClear={this.handleClear} handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
