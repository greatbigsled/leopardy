import React from 'react';
import './QuestionsRow.css';
import PriceCell from '../PriceCell/PriceCell';
import ThemeCell from '../ThemeCell/ThemeCell';
import { ThemeQuestionsI } from '../../data/questionsTypes'

interface PropsI {
    themeQuestions: ThemeQuestionsI
}

function QuestionsRow({ themeQuestions }: PropsI) {
  return (
    <div className="questions-row">
        <div className="question-row__theme">
            <ThemeCell theme={themeQuestions.theme} />
        </div>
        <div className="question-row__prices">
            {themeQuestions.questions.map(item => (
                <PriceCell key={themeQuestions.id + item.price} price={item.price} />
            ))}
        </div>
    </div>
  );
}

export default QuestionsRow;
