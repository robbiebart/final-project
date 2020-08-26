import React from "react";
const questions = require("../QuestionData.json");

export default function Answers({ answers }) {
  return answers.map((answer) => {
    const a = questions.find((q) => q.id === answer.parent);
    return (
      <div>
        {a.text}
        <br />
        {answer.label}
      </div>
    );
  });
}
