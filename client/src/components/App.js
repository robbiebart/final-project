import React, { useState } from "react";
import Answers from "./Answers";
import Question from "./Question";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState("001");
  const [answers, updateAnswers] = useState([]);
  const handleAnswer = (answer) => {
    // TODO: handle viewport scroll
    updateAnswers([...answers, answer]);
    setCurrentQuestion(answer.next);
  };
  const handleSubmit = () => {
    // do database submission!
    // eg: fetch('/api_url', { answers })
  };
  return (
    <Grid>
      <GlobalStyle />
      <Banner>
        <h2>Banner</h2>
      </Banner>
      <Nav>
        <h2>Nav Bar</h2>
      </Nav>
      <QuizTitle>Cake questionaire</QuizTitle>
      <Answers answers={answers} />
      <Question
        setQuestion={setCurrentQuestion}
        questionId={currentQuestion}
        handleAnswer={handleAnswer}
      />
      {currentQuestion === "submit" ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : null}
    </Grid>
  );
}

const Grid = styled.div`
  border: solid 2px red;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: [first] 100px [main-start] auto [main-end] 100px [end];
  grid-template-rows: [row1-start] 25% [nav-start] 100px [third-line] 50px [fourth-line];
  grid-auto-rows: minmax(300px, auto);
`;

const Banner = styled.div`
  border: solid 5px yellow;
  background-color: lightblue;

  grid-column-start: first;
  grid-column-end: end;

  grid-row-start: row1-start;
  grid-row-end: nav-start;
`;

const Nav = styled.div`
  border: solid green 5px;

  grid-column-start: first;
  grid-column-end: end;

  grid-row-start: nav-start;
  grid-row-end: third-line;
  background: rgba(32, 48, 64, 1);
`;

const QuizTitle = styled.h2`
  grid-column-start: main-start;
  grid-column-end: main-end;

  grid-row-start: third-line;
`;

export default App;
