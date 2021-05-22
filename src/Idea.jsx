import React from "react";

import "./styles.css";

const Idea = ({ details, onDelete }) => (
  <li className="Idea">
    {details.message} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Idea;
