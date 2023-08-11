import React, { useState } from "react";
import "./FlashCard.scss";

import question from "./questions";

export default function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flash--cards">
      {question.map((item) => (
        <div
          className={item.id === selectedId ? "asnwer" : " question"}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}
