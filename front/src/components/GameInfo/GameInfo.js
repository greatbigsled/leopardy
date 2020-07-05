import React from "react"

import "./GameInfo.css";
import { useAppState } from "../../state/context";

export default function GameInfo() {
  const { state } = useAppState()
  const { info: { title, description } } = state

  return (
    <div className="game-info">
      <div className="game-info__title">{ title }</div>
      <div>{ description }</div>
    </div>
  );
}
