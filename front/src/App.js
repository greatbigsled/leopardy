import React, { useEffect } from 'react'

import './App.css'
import Splash from './components/Splash/Splash'
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Login from './components/Login/Login'
import Players from './components/Players/Players'
import GameInfo from './components/GameInfo/GameInfo'
import QuestionFull from './components/QuestionFull/QuestionFull'
import { useAppState } from './state/context'
import { setUser, setLoading } from './state/actions'
import getUser from './api/getUser'

function App() {
  const { state, dispatch } = useAppState()
  const isUserExists = Boolean(state.user)
  const isLoading = state.isLoading

  useEffect(() => {
    if (!state.user) {
      getUser()
        .then((user) => {
          dispatch(setUser(user))
          dispatch(setLoading(false))
        }, (error) => {
          console.log(error)
        })
    }

  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
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

      <Splash isHidden={!isLoading} />
    </div>
  )
}

export default App
