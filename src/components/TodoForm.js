import React, { Component } from "react";

export class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChanges} type="text" name="item" />
        <button onClick={this.handleSubmit}>Add Todo</button>
        <button onClick={this.props.handleClear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
