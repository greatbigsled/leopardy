import React, { useState } from 'react'
import './GamesList.css'

import GameDescription from '../GameDescription/GameDescription'
import fakeGames from '../../../other/fakeGamesList'

export default function GamesList() {
  const games = fakeGames
  // const selectedGame = fakeGames[0]

  const [selectedGame, setSelectedGame] = useState(null)

  const selectGameById = (id) => {
    const selected = games.find(g => g.id === id)

    if (selected) {
      setSelectedGame(selected)
    } else {
      setSelectedGame(null)
    }
  }

  return (
      <div className="games__wrapper">
        <h2>
          Выберите игру из списка или <button>создайте свою</button>
        </h2>

        <div className="games">
          <div className="games__list">
            {games.map((g) => {
              return (
                <div key={g.id} className="games__list-item">
                  <button className="games__list-item-btn" onClick={() => selectGameById(g.id)} >{g.title}</button>
                </div>
              )
            })}
          </div>

          <div className="games__selected">
            <GameDescription gameInfo={selectedGame} />
          </div>
        </div>
      </div>
  )
}
