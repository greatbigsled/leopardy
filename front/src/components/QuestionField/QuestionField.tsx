import React from 'react';
import './QuestionField.css';
import QuestionsRow from '../QuestionsRow/QuestionsRow'
import { ThemeQuestionsI } from '../../data/questionsTypes'

interface PropsI {
  questions: Array<ThemeQuestionsI>
}

function QuestionField({ questions }: PropsI) {
  return (
    <div className="question-field">
      {
      questions.map( (themeQuestions: ThemeQuestionsI, i: number ) => {
        return <QuestionsRow key={themeQuestions.id + 'theme'} themeQuestions={themeQuestions} />
      })
      }
    </div>
  );
}

export default QuestionField;
