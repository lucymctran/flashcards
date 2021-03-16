import React from "react";

const FlipCardsCSS = () => {
  return (
    <div className="flip">
      <div
        className="front"
        style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
      >
        <h1 className="text-shadow">Front Card</h1>
      </div>
      <div className="back">
        <h2>Back Card</h2>
      </div>
    </div>
  );
};
