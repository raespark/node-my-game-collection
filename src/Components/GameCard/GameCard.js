import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating';
import Genre from '../Genre/Genre';
import './gamecard.less';


class GameCard extends Component {
  
  render() {
    const game = this.props.game;
    return (
      <div key={game.id} id={game.id} className="game game-card">
        <div className="image-and-description">
          <img className="game-cover-image" src={game.cover} alt={game.title + ' cover'}/>
          <div className="game-info">
            <div className="game-title-and-year game-title">
              <h2 className="title-header">
                {game.title + ' - ' + game.yearReleased}
              </h2>
              <hr className="game-title-hr"/>
            </div>
            <StarRating/>
            <div className="game-description">
              <p className="description-text">
                {game.description || '- No Description -'}
              </p>
            </div>
          </div>
        </div>
        <div className="genres-and-platforms">
          <div className="platforms">
            <h3>{'Owned on:'}</h3>
            <div className="platform-list">
              { game.platforms.map(platform => (
                <Genre genre={platform.name}/>
              ))}
            </div>
          </div>
          <div className="genres">
            <h3>{'Genres:'}</h3>
            {!!game.genres.length && <div className="genre-list">
              {game.genres.map(platform => (
                <Genre genre={platform.name}/>
              ))}
            </div>}
            {!game.genres.length && <div className="no-genres-text">
              {'- No Genres -'}
            </div>}
          </div>
        </div>
        <hr className="game-card-hr"/>
      </div>
    );
  }
}

export default GameCard;
