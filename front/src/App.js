import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

import { reducer, initialState } from './state/store'
import { StoreContext } from './state/context'

import './App.css'
import Board from './components/Board/Board'
import Login from './components/Login/Login'
import Players from './components/Players/Players'
import GameInfo from './components/GameInfo/GameInfo'
import QuestionFull from './components/QuestionFull/QuestionFull'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isUserExists = Boolean(state.user)

  useEffect(() => {
    async function getUser() {
      const user = await axios.post('http://localhost:3033/auth', { action: 'get_user'})
      console.log(user)
    }
    getUser()
  })

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <div className="app">
        {/* Game */}
        <div hidden={!isUserExists} className="app__game">
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
        <div hidden={isUserExists} className="app__login">
          <Login />
        </div>
      </div>
    </StoreContext.Provider>
  )
}

export default App
