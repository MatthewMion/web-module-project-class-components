import React, { Component } from "react";

export class Todo extends Component {
  handleClick = () => {
    this.props.handleToggle(this.props.item.id);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`${this.props.item.completed ? " completed" : ""}`}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default Todo;
