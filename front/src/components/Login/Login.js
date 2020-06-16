import React, { useContext, useState } from "react";
import { StoreContext } from '../../state/context'
import { setUser } from '../../state/actions'

import "./Login.css";

export default function Login() {
  const [userData, setUserData] = useState({ username: '', id: 'KSJALSD'})

  const { state, dispatch } = useContext(StoreContext)

  const onLoginClick = () => {
    dispatch(setUser({ ...userData }))
  }

  return (
    <div className="login">
      <h1 className="login-title">Leopardy</h1>

      <div className="login-form">
        <div className="login-item">
          <span className="login-item__title">Username</span>
          <input className="login-item__input" type="text" onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        </div>

        <div className="login-item">
          <span className="login-item__title">Password</span>
          <input className="login-item__input" type="password" />
        </div>

        <div className="login-item" onClick={onLoginClick}>
          <button className="login-item__btn">Login</button>
        </div>
      </div>
    </div>
  );
}
