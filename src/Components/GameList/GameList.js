import React, { Component } from 'react';
import GameCard from '../GameCard/GameCard';
import './gamelist.less';


class GameList extends Component {
  
  render() {
    return (
      <div className="game-list">
        <hr/>
        {
          this.props.games.map((game, i) => (
            <GameCard game={game} key={i}/>
          ))
        }
        {this.props.games.length === 0 &&
          <div>
            <div className="no-games-text">
              <h1>{'No Games :('}</h1>
              <h3>{'Try adding more, or adjusting your filters'}</h3>
            </div>
            <hr/>
          </div>
        }
      </div>
    );
  }
}

export default GameList;
