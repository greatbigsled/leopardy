import React from 'react'
import './Lobby.css'

import GamesList from './GamesList/GamesList'

export default function Lobby() {
  return (
    <div className="lobby">
      <div className="games">
        <h3>Список игр</h3>

        <GamesList />
      </div>
    </div>
  )
}
