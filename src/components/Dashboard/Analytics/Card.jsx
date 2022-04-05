import React from "react";
import "../styles/card.scss";

const Card = ({title, body}) => {
  return <div className="card">
        <div className="card__content">
            <p>{title}</p>
            <h3>{body} </h3>
        </div>
  </div>;
};

export default Card;
