import React, { useState, useEffect } from "react";
import styled from "styled-components";
const questions = require("../QuestionData.json");

export default function Answers({ answers }) {
  return answers.map((answer) => {
    const a = questions.find((q) => q.id === answer.parent);
    return (
      <AnsComponent key={answer.value}>
        <p>You were asked: {a.text}</p>
        <p>You answered: {answer.label}</p>
      </AnsComponent>
    );
  });
}

const AnsComponent = styled.div`
  display: flex;
  justify-content: center;
  /* height: 150px; */
  background-color: lightgray;
  width: 100%;
  height: fit-content;
  /* padding: 5px; */
  margin: 10px 0px 10px 0px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  p {
    padding: 10px;
  }
`;

// export default function Answers({ answers, color }) {
//   console.log("color", color);

//   let answerArr = [];
//   const fillArr = answers.map((answer) => {
//     answerArr.push(color);
//   });
//   const answersArr = answers.map((answer) => {
//     return toString(color);
//   });
//   console.log("answers array", answersArr);
//   console.log("answerArr", answerArr);
//   return answersArr.map((answer) => {
//     if (color === true) {
//       return (
//         <GreyComponent color={color} key={answer.value}>
//           {answer.text}
//           <br />
//           {answer.label}
//         </GreyComponent>
//       );
//     } else {
//       return (
//         <PinkComponent color={color} key={answer.value}>
//           {answer.text}
//           <br />
//           {answer.label}
//         </PinkComponent>
//       );
//     }
//   });
// }

// const GreyComponent = styled.div`
//   border-bottom: solid lightgray 2px;
//   height: 250px;
//   background-color: white;
//   width: 100%;
// `;

// const PinkComponent = styled.div`
//   border-bottom: solid lightgray 2px;
//   height: 250px;
//   background-color: black;
//   width: 100%;
// `;
