import React from "react";
import styled from "styled-components";
const questions = require("../QuestionData.json");

export default function Answers({ answers }) {
  return answers.map((answer) => {
    const a = questions.find((q) => q.id === answer.parent);
    return (
      <AnsComponent>
        {a.text}
        <br />
        {answer.label}
      </AnsComponent>
    );
  });
}

const AnsComponent = styled.div`
  grid-column-start: main-start;
  grid-column-end: main-end;

  grid-row-start: fourth-line;
`;
