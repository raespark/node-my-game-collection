import React, { Component } from 'react';
import GameCard from '../GameCard/GameCard';
import mockGamesData from '../../mockGameData';
import './gamelist.less';


class GameList extends Component {
  
  render() {
    return (
      <div className="game-list">
        {
          mockGamesData.map(game => (
            <GameCard game={game}/>
          ))
        }
      </div>
    );
  }
}

export default GameList;
