import React, { useState } from 'react'
import { useAppState } from '../../state/context'
import './Login.css'

import logIn from '../../api/logIn'

export default function Login() {
  const { dispatch } = useAppState()

  const [username, setName] = useState('')
  const [password, setPassword] = useState('')

  const onLoginSubmit = async () => {
    const res = await logIn(username, password)

    console.log(res && res.data)
  }

  return (
    <div className="login">
      <h1 className="login-title">Leopardy</h1>

      <div className="login-form">
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
