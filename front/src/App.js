import React, { useReducer, useEffect } from "react";
import io from "socket.io-client";

import { reducer, initialState } from "./state/store";
import { StoreContext } from "./state/context";

import "./App.css";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import Players from "./components/Players/Players";
import GameInfo from "./components/GameInfo/GameInfo";
import QuestionFull from "./components/QuestionFull/QuestionFull";

const IO_ENDPOINT = "http://localhost:3033";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isUserExists = Boolean( state.user )

  useEffect(() => {
    const socket = io(IO_ENDPOINT);

    socket.on("FromAPI", (data) => {
      console.log("IIIIIIIIOOOOOOOOO");
      console.log(data);
    });

    socket.emit("yo yo yo", { foo: "bar" });
  }, []);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <div className="app">


        {/* Game */}
        <div
          hidden={!isUserExists}
          className="app__game">

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


        {/* Login */}
        <div
          hidden={isUserExists}
          className="app__login">
          <Login />
        </div>


      </div>
    </StoreContext.Provider>
  );
}

export default App;
