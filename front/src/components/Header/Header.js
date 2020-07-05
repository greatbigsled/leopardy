import React from 'react'
import './Header.css'
import { useAppState } from '../../state/context'
import Dropdown from '../Dropdown/Dropdown'
import { setUser } from '../../state/actions'

import { deleteCookie } from '../../utils/cookie'

export default function Header() {
  const { state, dispatch } = useAppState()
  const username = state.user && state.user.name

  const dropdownItemsArr = [{title: 'Logout', action: 'logout'}]

  const logOut = () => {
    deleteCookie('sid')
    dispatch(setUser(null))
  }

  const handleItemClick = (it) => {
    switch (it.action) {
      case 'logout': {
        logOut()
        break
      }
      default: {
        console.error('Unknnown action', it.action)
      }
    }
  }

  return (
    <div className="header">
      <h2 className="header__title">Leopardy</h2>

      <div className="header__user">
        <Dropdown title={username} itemsArr={dropdownItemsArr} onItemClick={handleItemClick} />
      </div>
    </div>
  )
}
