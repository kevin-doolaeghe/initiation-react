import React, { Component } from "react";

import "./styles.css";

class IdeaForm extends Component {
  state = {
    message: ""
  };

  handleChange = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const message = this.state.message;
    this.props.onIdeaAdd({ message });

    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="IdeaForm" onSubmit={this.handleSubmit}>
        <label>Idée : </label>
        <input
          value={this.state.message}
          onChange={this.handleChange}
          type="text"
          placeholder="Apprendre React.js"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default IdeaForm;
