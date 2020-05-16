import React, { useContext } from "react";
import { StoreContext } from '../../state/context'
import { selectCell } from '../../state/actions'

import "./Board.css";
import BoardRow from "../BoardRow/BoardRow";

export default function Board({ isVisible }) {
  const { state, dispatch } = useContext(StoreContext)
  const { selectedCell } = state.board

  const onCellSelect = ({ selectedCellIdx, selectedRowIdx }) => {
    console.log({ selectedCellIdx, selectedRowIdx })
    dispatch( selectCell({ selectedCellIdx, selectedRowIdx }) )
  }

  const visibilityClassName = isVisible
    ? "board--is-visible"
    : "board--is-hidden";


  return (
    <div className={`board ${visibilityClassName}`}>
      {
        state.board.questions.map( (q, idx) => (
          <BoardRow
            key={q.id}
            rowIdx={idx}
            questions={q}
            selectedCell={selectedCell}
            onCellSelect={onCellSelect} />
        ))
      }
    </div>
  );
}
