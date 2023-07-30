import React from "react";
import "../style/NewCard.css";

function NewsCard(props) {
  let url = new Date(props.data.publishedAt);
  return (
    <>
      <div className="card">
        <img src={props.data.image} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{props.data.title}</h2>
          <p className="card-description">{props.data.description}</p>
          <h6>{url.toString()}</h6>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
