import React, { useState } from 'react'
import { useAppState } from '../../state/context'
import './Login.css'
import { setUser, setLoading } from '../../state/actions'

import logIn from '../../api/logIn'

export default function Login() {
  const { state, dispatch } = useAppState()

  const [username, setName] = useState('')
  const [password, setPassword] = useState('')

  const onLoginSubmit = async () => {
    dispatch(setLoading(true))
    console.log(state)

    const res = await logIn(username, password)
    console.log(res && res.data)

    dispatch(setLoading(false))

    const error = res.data.error
    if (error) {
      alert('ERROR: ' + error.message)
      return
    }

    const user = res.data.data

    dispatch(setUser(user))
  }

  return (
    <div className="login">
      <div className="login-form">
        <h1 className="login-title">Leopardy</h1>
        <div>
          Welcome to Leopardy game.
          Log in or create account to continue
        </div>
        <br/>

        <div className="login-item">
          <span className="login-item__title">Username</span>
          <input
            className="login-item__input"
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="login-item">
          <span className="login-item__title">Password</span>
          <input
            className="login-item__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-item">
          <button className="login-item__btn" onClick={onLoginSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
