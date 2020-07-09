import React from 'react'
import './GameDescription.css'

export default function GameDescription({ gameInfo }) {
  if (!gameInfo) {
    return (<div>
      <p>Выберите игру из списка слева</p>
    </div>)
  }

  const { title, createdAt } = gameInfo
  console.log({ createdAt})

  return (
    <div>
      <h3>{ title }</h3>
      <p>Создана: { createdAt.toDateString() }</p>
      <div>
        <button>Присоединится к игре</button>
      </div>
    </div>
  )
}
