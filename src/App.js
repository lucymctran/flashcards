import React, { useState } from "react";
import Style from "./components/Style.css";
import Introduction from "./components/Introduction.js";
import CreateCard from "./components/CreateCard.js";

const App = () => {
  return (
    <div className="ui container">
      <Introduction />
      <CreateCard />
    </div>
  );
};

export default App;
