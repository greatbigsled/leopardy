import React from 'react';
import './ThemeCell.css';

interface PropsI {
  theme: string
}

function ThemeCell({ theme }: PropsI) {
  return (
    <div className="theme-cell">
      <span className="theme-cell__value">{ theme }</span>
    </div>
  );
}

export default ThemeCell;
