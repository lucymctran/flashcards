import React, { useState } from "react";
import Cards from "./Cards.js";

const CreateCard = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [storage, setStorage] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setStorage((storage) => [
      ...storage,
      <Cards question={question} answer={answer}></Cards>,
    ]);
  };

  return (
    <div className="ui form">
      <div className="field">
        <label>Question</label>
        <textarea
          rows="2"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="field">
        <label>Answer</label>
        <textarea
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="button" onClick={handleClick}>
        Create Card
      </button>
      {storage.map((item, index) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
};

export default CreateCard;
