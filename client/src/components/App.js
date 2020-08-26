import React, { useState } from "react";
import Answers from "./Answers";
import Question from "./Question";

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
    <>
      <h1>Cake questionaire</h1>
      <Answers answers={answers} />
      <Question
        setQuestion={setCurrentQuestion}
        questionId={currentQuestion}
        handleAnswer={handleAnswer}
      />
      {currentQuestion === "014" ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : null}
    </>
  );
}

export default App;
