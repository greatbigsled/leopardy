import React, { useReducer } from "react";

import { reducer, initialState } from "./state/store";
import { StoreContext } from "./state/context";

import "./App.css";
import Board from "./components/Board/Board";
import Players from "./components/Players/Players";
import GameInfo from "./components/GameInfo/GameInfo";
import QuestionFull from "./components/QuestionFull/QuestionFull";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <div className="app">
        <div className="board-block">
          <Board isVisible={true} />
          <QuestionFull activeQuestion={null} />
        </div>

        <div className="game-info-block">
          <GameInfo />
        </div>

        <div className="players-block">
          <Players />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
