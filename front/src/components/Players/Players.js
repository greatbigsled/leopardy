import React from "react";
import "./Players.css";

export default function Players() {
  return (
    <div className="players-list">
      <div className="player">
        <div className="player-header">
          <div className="player-avatar player-avatar--one"></div>
          <div className="player-name">Константин</div>
        </div>
        <div className="player-footer">2 400</div>
      </div>

      <div className="player">
        <div className="player-header">
          <div className="player-avatar player-avatar--two"></div>
          <div className="player-name">Вася</div>
        </div>
        <div className="player-footer">11 300</div>
      </div>

      <div className="player">
        <div className="player-header">
          <div className="player-avatar player-avatar--three"></div>
          <div className="player-name">Nagibator666</div>
        </div>
        <div className="player-footer">- 1 900</div>
      </div>
    </div>
  );
}
