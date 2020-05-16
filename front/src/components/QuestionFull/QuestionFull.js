import React from "react";
import "./QuestionFull.css";

export default function QuestionFull({ activeQuestion }) {
  let question
  const isHidden = !Boolean(activeQuestion)

  if (!isHidden) {
    question = activeQuestion.question
  }

  return (
    <div className="question-full" hidden={isHidden} >
      {question}
    </div>
  );
}
