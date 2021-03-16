import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Cards = (props) => {
  const { question, answer } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="ui grid container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="four wide column">
          <li className="cardStyle front-card">
            <h1>{question}</h1>
            <button key="front" onClick={handleClick}>
              Click to flip
            </button>
          </li>
        </div>
        <div className="four wide column">
          <li className="cardStyle back-card">
            <h1>{answer}</h1>
            <button key="back" onClick={handleClick}>
              Click to flip
            </button>
          </li>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Cards;
