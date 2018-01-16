import React from "react";
import "./GameTile.css";
const GameTile = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  <span onClick={() => props.shuffleTiles(props.id)} className="shuffle">
      O
    </span>

  </div>
);
export default GameTile;