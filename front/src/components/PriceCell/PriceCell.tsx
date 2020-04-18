import React from 'react';
import './PriceCell.css';

interface PropsI {
  price: number
}

function PriceCell({ price }: PropsI) {
  return (
    <div className="price-cell">
      <span className="price-cell__value">{ price }</span>
    </div>
  );
}

export default PriceCell;
