import React from 'react'
import './PlayerList.css'
import { PlayerI } from '../../data/players'
import Player from '../Player/Player'

interface PropsI {
  players: Array<PlayerI>
}

function PlayerList({ players }: PropsI) {
  return (
      <div className="player-list">
          {
          players.map((p, i) => (
            <Player key={i + 'player'} player={p} />
          ))
          }
      </div>
  )
}

export default PlayerList;
