import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card--image" />
      <div className="card--stats">
        <h2>{props.item.title}</h2>
        <h3>{props.item.location}</h3>
        <span>({props.item.year})</span>
      </div>
      <p className="card--descipription">{props.item.description}</p>
    </div>
  );
}
