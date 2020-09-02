import React, { useState, useEffect } from "react";
import styled from "styled-components";
const questions = require("../QuestionData.json");

export default function Question({ setQuestion, questionId, handleAnswer }) {
  const [activeQuestion, setActiveQuestion] = useState();
  useEffect(() => {
    setActiveQuestion(questions.find((q) => q.id === questionId));
  }, [questionId]);
  useEffect(() => {
    let elmnt;
    if (activeQuestion !== undefined) {
      elmnt = document.getElementById(activeQuestion.name);
      elmnt.scrollIntoView();
    }
  }, [activeQuestion]);
  return (
    <QuestionWrapper>
      {activeQuestion && (
        <CurrentQuestion id={activeQuestion.name}>
          <QuestionText>{activeQuestion.text}</QuestionText>
          {activeQuestion.options.map((option) => (
            <RadioWrapper key={option.label}>
              <Radio
                type="radio"
                id={`${option.value}_${option.next}`}
                name={activeQuestion.name}
                // checked="false"
                onChange={() => handleAnswer(option)}
              />
              <RadioLabel htmlFor={`${option.value}_${option.next}`}>
                {option.label}
              </RadioLabel>
            </RadioWrapper>
          ))}
        </CurrentQuestion>
      )}
    </QuestionWrapper>
  );
}

const QuestionWrapper = styled.div`
  grid-column-start: main-start;
  grid-column-end: main-end;
  grid-row-start: auto;

  margin-bottom: 200px;

  p {
    color: gray;
  }
`;

const CurrentQuestion = styled.div`
  /* border: solid blue 2px; */
`;

const QuestionText = styled.p`
  padding: 8px;
  margin: 5px;
  color: gray;
`;

const RadioWrapper = styled.div`
  border: solid lightgray 1px;

  border-radius: 5px;

  padding: 8px;
  margin: 5px;
`;

const RadioLabel = styled.label`
  padding: 5px;

  p {
    color: gray;
  }
`;

const Radio = styled.input`
  cursor: pointer;
  color: gray;
`;
