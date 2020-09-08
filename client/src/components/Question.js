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
    } else if (activeQuestion === undefined && questionId === "submit") {
      elmnt = document.getElementById("SubmitButton");
      elmnt.scrollIntoView();
    }
  }, [activeQuestion]);
  console.log("activeQuestion", activeQuestion);
  // console.log("questionId", questionId);
  // console.log("element", document.getElementById("SubmitButton"));
  return (
    <QuestionWrapper>
      {activeQuestion && (
        <CurrentQuestion id={activeQuestion.name}>
          <QuestionText>
            <h3>{activeQuestion.text}</h3>
          </QuestionText>
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
                <div>
                  <p>{option.label}</p>
                </div>
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

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  margin-bottom: ${({ questionId }) => (questionId === "001" ? "0px" : "50px")};

  width: 100%;

  p {
    color: gray;
  }
`;

const CurrentQuestion = styled.div`
  width: 100%;
`;

const QuestionText = styled.p`
  padding: 8px;
  margin: 5px;
  color: gray;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* border: solid lightgray 1px; */
  border-radius: 8px;
  padding: 8px;
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: 100%;

  background-color: #fbc9b5;

  @media (min-width: 680px) {
    height: fit-content;
  }
`;

const RadioLabel = styled.label`
  padding: 1px;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    cursor: pointer;
    border: 2px solid transparent;
  }

  &:checked div {
    background-color: #ffd6bb;
    border: 1px solid #ff6600;
  }
`;

const Radio = styled.input`
  cursor: pointer;
  color: gray;
  visibility: hidden;
  position: absolute;

  div {
    cursor: pointer;
    border: 2px solid transparent;
  }

  &:checked div {
    background-color: #ffd6bb;
    border: 1px solid #ff6600;
  }
`;
