import React, { Component } from "react";

import Idea from "./Idea";
import IdeaForm from "./IdeaForm";

import "./styles.css";

class IdeaList extends Component {
  state = {
    ideas: [
      { id: 0, message: "Idea n°1" },
      { id: 1, message: "Idée n°2" }
    ]
  };

  handleAdd = (idea) => {
    const ideas = [...this.state.ideas];
    idea.id = ideas.length;

    ideas.push(idea);

    this.setState({ ideas });
  };

  handleDelete = (id) => {
    const ideas = [...this.state.ideas];

    const index = ideas.findIndex((idea) => idea.id === id);
    ideas.splice(index, 1);

    this.setState({ ideas });
  };

  render() {
    const title = "Liste des idées";

    return (
      <div className="IdeaList">
        <h1>{title}</h1>
        <ul>
          {this.state.ideas.map((idea) => (
            <Idea key={idea.id} details={idea} onDelete={this.handleDelete} />
          ))}
        </ul>
        <IdeaForm onIdeaAdd={this.handleAdd} />
      </div>
    );
  }
}

export default IdeaList;
