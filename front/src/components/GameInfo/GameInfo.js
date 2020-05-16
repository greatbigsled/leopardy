import React, { useContext } from "react"
import { StoreContext } from '../../state/context'

import "./GameInfo.css";

export default function GameInfo() {
  const { state } = useContext(StoreContext)
  const { info: { title, description } } = state

  return (
    <div className="game-info">
      <div className="game-info__title">{ title }</div>
      <div>{ description }</div>
    </div>
  );
}
