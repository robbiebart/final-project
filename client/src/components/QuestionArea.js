import React, { useState } from "react";
import styled from "styled-components";
import Answers from "./Answers";
import Question from "./Question";

export default function QuestionArea() {
  const [currentQuestion, setCurrentQuestion] = useState("001");
  const [answers, updateAnswers] = useState([]);
  const [error, setError] = useState(null);
  const handleAnswer = (answer) => {
    // TODO: handle viewport scroll
    /*
    hook into handleanswer, in onSelect, then do scrolltintoview
    var elmnt = document.getElementById("content");elmnt.scrollIntoView();
    */
    updateAnswers([...answers, answer]);
    setCurrentQuestion(answer.next);
  };
  const handleSubmit = async () => {
    // do database submission!
    console.dir(answers);
    try {
      const response = await fetch("/cake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${store.get('token')}`
        },
        body: JSON.stringify(answers),
      });

      const created = await response.json();
      console.dir(created);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <QuestionAreaWrapper>
      <QuizTitle>Cake questionaire</QuizTitle>
      <Answers answers={answers} />
      <Question
        setQuestion={setCurrentQuestion}
        questionId={currentQuestion}
        handleAnswer={handleAnswer}
      />
      {currentQuestion === "submit" ? (
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      ) : null}
      {error && (
        <>
          <h4>Woops, failed to save this cake, it must be too lit</h4>
          <p>{error.message}</p>
        </>
      )}
    </QuestionAreaWrapper>
  );
}

const QuizTitle = styled.h1``;

const QuestionAreaWrapper = styled.div`
  grid-row-start: third-line;
  grid-row-end: fourth-line;
  grid-column-start: main-start;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  background-color: #ffc0cb70;
  border-radius: 4px;
  border: solid 1px pink;
  box-shadow: 1px 1px gray;
  opacity: 0.9;
  font-family: "Cabin", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
