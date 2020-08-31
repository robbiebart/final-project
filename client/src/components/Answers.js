import React from "react";
import styled from "styled-components";
const questions = require("../QuestionData.json");

export default function Answers({ answers }) {
  return answers.map((answer) => {
    const a = questions.find((q) => q.id === answer.parent);
    return (
      <AnsComponent key={answer.value}>
        {/* {a.text}
        <br />
        {answer.label} */}
      </AnsComponent>
    );
  });
}

const AnsComponent = styled.div`
  border-bottom: solid lightgray 2px;
  height: 250px;
`;
