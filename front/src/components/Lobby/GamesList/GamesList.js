import React from 'react'
import './GamesList.css'

import GameDescription from '../GameDescription/GameDescription'

export default function GamesList() {
  const games = [{ title: 'Game1', id: 11 }]
  const selectedGame = { title: 'Game1' }

  return (
    <div>
      <div className="games-list__wrapper">
        <div className="games-list">
          {games.map((g) => {
            return (
              <div key={g.id} className="games-list__item">
                {g.title}
              </div>
            )
          })}
        </div>
        <GameDescription gameInfo={selectedGame} />
      </div>
    </div>
  )
}
