import React from 'react'
import "./BoardCell.css";

export default function BoardCell({ isAnswered, isSelectAnimationActive, value, onClick }) {
  const isAnsweredClassName = isAnswered ? 'cell__is-answered' : ''
  const selectAnimationClassName = isSelectAnimationActive ? 'cell--select-animation-active' : ''

  return (
    <div
      className={ `cell ${isAnsweredClassName} ${selectAnimationClassName }`}
      onClick={ onClick }>
      <span className="cell__value">{ value }</span>
    </div>
  );
}
