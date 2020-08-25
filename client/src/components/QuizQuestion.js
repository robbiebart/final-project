import React, { useState } from "react";
import styled from "styled-components";

const data = require("../QuestionData.json");

export default function QuizQuestion() {
  const [answers, setAnswers] = useState([]);
  //const [answer, setAnswer] = useState(null);
  console.log("answers: ", answers);
  let displayQuestions = [];
  const handleAnswer = () => {
    // answers.push(answer);
  };
  //   const logAnswer = () => {
  //     return "answer";
  //   };
  // };
  /*
to change answers, concat array from index on

  */
  const setFullAnswers = (index, theAnswer) => {
    const tempAnswers = [...answers];
    tempAnswers[index] = theAnswer;
    // slice or splics or anything that cuts the array after that index

    setAnswers(tempAnswers);
  };

  displayQuestions = (
    <Question>
      <p>{data[0].text}</p>
      <label htmlFor="chocolate">{data[0]["answer-a"]}</label>
      <input
        type="radio"
        id="chocolate"
        name="flavour"
        onChange={() => setFullAnswers(0, `${data[0]["answer-a"]}`)}
      />
      <label htmlFor="vanilla">{data[0]["answer-b"]}</label>
      <input
        type="radio"
        id="vanilla"
        name="flavour"
        onChange={() => setFullAnswers(0, `${data[0]["answer-b"]}`)}
      />
      <label htmlFor="neither">{data[0]["answer-c"]}</label>
      <input
        type="radio"
        id="neither"
        name="flavour"
        onChange={() => setFullAnswers(0, `${data[0]["answer-c"]}`)}
      />
    </Question>
  );

  return (
    <QuestionArea>
      <form>{displayQuestions}</form>
    </QuestionArea>
  );
}

const QuestionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Question = styled.div`
  /* display: none; */
  border: red solid 2px;
`;
