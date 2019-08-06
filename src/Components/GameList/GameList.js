import React, { Component } from 'react';
import GameCard from '../GameCard/GameCard';
import mockGamesData from '../../mockGameData';
import './gamelist.less';


class GameList extends Component {
  
  render() {
    return (
      <div className="game-list">
        {
          mockGamesData.map((game, i) => (
            <GameCard game={game} key={i}/>
          ))
        }
      </div>
    );
  }
}

export default GameList;
