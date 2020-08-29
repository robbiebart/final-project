import React, { useState } from "react";
import Answers from "./Answers";
import Question from "./Question";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState("001");
  const [answers, updateAnswers] = useState([]);
  const [error, setError] = useState(null);
  const handleAnswer = (answer) => {
    // TODO: handle viewport scroll
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
    <Grid>
      <GlobalStyle />
      <Banner>
        <h2>Banner</h2>
      </Banner>
      <Nav>
        <h2>Nav Bar</h2>
      </Nav>
      <QuestionArea>
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
      </QuestionArea>
    </Grid>
  );
}

const Grid = styled.div`
  border: solid 2px red;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: [first] 5vw [main-start] auto [main-end] 5vw [end];
  grid-template-rows:
    [row1-start] 20vh [nav-start] 100px [third-line] calc(100% - 75px)
    [fourth-line];
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

const QuizTitle = styled.h2``;

const QuestionArea = styled.div`
  grid-row-start: third-line;
  grid-row-end: fourth-line;
  grid-column-start: main-start;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  background-color: pink;
  border-radius: 1px;
`;

export default App;
