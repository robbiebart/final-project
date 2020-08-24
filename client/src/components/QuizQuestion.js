import React from "react";
import styled from "styled-components";

export default function QuizQuestion() {
  return (
    <QuestionArea>
      <Option>Chocolate</Option>
      <Option>Vanilla</Option>
      <Option>Neither</Option>
    </QuestionArea>
  );
}

const QuestionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Option = styled.input`
  cursor: pointer;
`;
