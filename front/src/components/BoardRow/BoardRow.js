import React from "react"

import "./BoardRow.css";
import BoardCell from "../BoardCell/BoardCell";


export default function BoardRow({ rowIdx, questions, selectedCell, onCellSelect }) {
  const selectedRowIdx = selectedCell && selectedCell.selectedRowIdx
  const selectedCellIdx = selectedCell && selectedCell.selectedCellIdx
  const { theme, items } = questions

  const isRowSelected = selectedRowIdx === rowIdx
  const isRowAnswered = items.every((q) => q.isAnswered)


  return (
    <div className="board-row">
      <BoardCell
        value={theme}
        isAnswered={isRowAnswered}
        isSelectAnimationActive={isRowSelected}
      />

      {items.map((q, idx) => (
        <BoardCell
          key={ idx }
          value={ q.price }
          isAnswered={ q.isAnswered }
          isSelectAnimationActive={ isRowSelected && selectedCellIdx === idx }
          onClick={ () => onCellSelect({ selectedCellIdx: idx, selectedRowIdx: rowIdx }) }
        />
      ))}
    </div>
  );
}
