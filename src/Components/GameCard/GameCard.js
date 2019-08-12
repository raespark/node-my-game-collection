import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Genre from '../Genre/Genre';
import './gamecard.less';


class GameCard extends Component {
  
  render() {
    const game = this.props.game;
    const gameLink = '/game/' + game.id;
    return (
      <div key={game.id} id={game.id} className="game game-card">
        <div className="image-and-description">
          <Link className="game-cover" to={gameLink}>
            <img className="game-cover-image" src={game.cover} alt={game.title + ' cover'}/>
          </Link>
          <div className="game-info">
            <Link to={gameLink} className="game-title-and-year game-title">
              <h3 className="title-header">
                {game.title + ' - ' + game.yearReleased}
              </h3>
              <hr className="game-title-hr"/>
            </Link>
            <StarRating stars={game.rating}/>
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
              { game.platforms.map((platform, i) => (
                <Genre key={i} genre={platform.name}/>
              ))}
            </div>
          </div>
          <div className="genres">
            <h3>{'Genres:'}</h3>
            {!!game.genres.length && <div className="genre-list">
              {game.genres.map((platform,i) => (
                <Genre key={i} genre={platform.name}/>
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
