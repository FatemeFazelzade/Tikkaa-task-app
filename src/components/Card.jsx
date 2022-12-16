import React from "react";
import "../styles/Card.css";
import Header from "./Header";
import StartingPage from "./StartingPage";

function Card() {
  return (
    <div className="background-main">
      <div className="background-card">
        <Header />
        <StartingPage />
      </div>
    </div>
  );
}

export default Card;
