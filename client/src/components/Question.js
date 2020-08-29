import React, { useState, useEffect } from "react";
import styled from "styled-components";
const questions = require("../QuestionData.json");

export default function Question({ setQuestion, questionId, handleAnswer }) {
  const [activeQuestion, setActiveQuestion] = useState();
  useEffect(() => {
    setActiveQuestion(questions.find((q) => q.id === questionId));
  }, [questionId]);
  return (
    <QuestComponent>
      {activeQuestion && (
        <div id={activeQuestion.name}>
          <p>{activeQuestion.text}</p>
          {activeQuestion.options.map((option) => (
            <div key={option.label}>
              <label htmlFor={`${option.value}_${option.next}`}>
                {option.label}
              </label>
              <input
                type="radio"
                id={`${option.value}_${option.next}`}
                name={activeQuestion.name}
                // checked="false"
                onChange={() => handleAnswer(option)}
              />
            </div>
          ))}
        </div>
      )}
    </QuestComponent>
  );
}

const QuestComponent = styled.div`
  grid-column-start: main-start;
  grid-column-end: main-end;

  grid-row-start: auto;
`;
