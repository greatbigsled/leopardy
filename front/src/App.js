import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Splash from './components/Splash/Splash'
import Lobby from './components/Lobby/Lobby'
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
      getUser().then(
        ({ user, error }) => {
          if (user) {
            dispatch(setUser(user))
            dispatch(setLoading(false))
          } else {
            console.log(error)
          }
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }, [])

  return (
    <div className="app">
      <div hidden={!isUserExists} className="app__header">
        <Header />
      </div>

      <Router>
        <Switch>
          <Route path="/game/:id">
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
          </Route>
          <Route path="/lobby">
            <Lobby />
          </Route>
        </Switch>
      </Router>

      <Splash isHidden={!isLoading} />
    </div>
  )
}

export default App
