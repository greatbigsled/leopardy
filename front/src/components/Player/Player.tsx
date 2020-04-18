import React from 'react';
import './Player.css';
import { PlayerI } from '../../data/players'

interface PropsI {
  player: PlayerI
}

function Player({ player: { points, name, imageUrl } }: PropsI) {
  return (
    <div className="player">
      <div className="player__header">
        <div className="player__avatar">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="player__name">{ name }</div>
      </div>
      <div className="player__footer">
        <div className="player__points">{points}</div>
      </div>
    </div>
  )
}

export default Player;
