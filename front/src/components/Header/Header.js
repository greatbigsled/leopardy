import React from 'react'
import './Header.css'
import { useAppState } from '../../state/context'
import Dropdown from '../Dropdown/Dropdown'

export default function Header() {
  const { state } = useAppState()
  const username = state.user && state.user.name

  const dropdownItemsArr = [{title: 'Logout', action: 'logout'}]

  return (
    <div className="header">
      <h2 className="header__title">Leopardy</h2>

      <div className="header__user">
        <Dropdown title={username} itemsArr={dropdownItemsArr} />
      </div>
    </div>
  )
}
