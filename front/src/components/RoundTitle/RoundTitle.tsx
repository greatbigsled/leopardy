import React from 'react';
import './RoundTitle.css';

interface PropsI {
    title: string
}

function RoundTitle({ title }: PropsI) {
  return (
    <h2 className="round-title">{ title }</h2>
  );
}

export default RoundTitle;
