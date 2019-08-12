import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import StarRating from '../StarRating/StarRating';
import GameData from '../../mockGameData';
import Genre from '../Genre/Genre';
import Platform from '../Platform/Platform';
import './gameviewpage.less';
import Modal from '../Modal/Modal';

class ViewGame extends Component {
  constructor(props){
    super(props);

    const {gameId} = props.match.params;

    this.game = GameData.find(game => game.id === parseInt(gameId));

    this.state = {
      showModal: false,
      modalImage: ''
    }

    this.closeModal = this.closeModal.bind(this);
    this.loadModalImage = this.loadModalImage.bind(this);
  }

  closeModal() {
    this.setState({modalImage:'', showModal: false});
  }

  loadModalImage(image){
    this.setState({modalImage: image, showModal: true})
  }

  render() {
    return (
      <div className="view-game">
        <NavBar/>
        {!this.game && 
          <Redirect to="/not-found"/>
        }
        {this.state.showModal && <Modal closeModal={this.closeModal}>
          <img className="game-screenshot" src={this.state.modalImage} alt={this.game.title + ' screenshot'}/>
        </Modal>}

        <div className="game-content">
          {this.game && <div className="body">
            <div className="image-column">
              <img className="game-cover-image" src={this.game.cover} alt={this.game.title + ' cover'}/>
              <StarRating stars={this.game.rating}/>
              <h3>{'Released:'}</h3>
              <p>{this.game.released.getMonth() + '/' + this.game.released.getDate() + '/' + this.game.released.getFullYear()}</p>
              {this.game.ESRB && 
                <div className="age-rating">
                  <img className="esrb-logo" src={this.game.ESRB.ratingCover} alt="esrb-rating"/>
                </div>}
              <div className="genres">
              <h3>{'Genres:'}</h3>
                {!!this.game.genres.length && <div className="genre-list">
                  {this.game.genres.map((genre,i) => (
                    <Genre key={i} genre={genre.name}/>
                  ))}
                </div>}
                {!this.game.genres.length && <div className="no-genres-text">
                  {'- No Genres -'}
              </div>}
            </div>
            </div>
            <div className="game-description-column">
              <div className="game-header">
                <h2 className="game-title">{this.game.title + ' - ' + this.game.yearReleased}</h2>
                <hr className="game-title-hr"/>
              </div>
              <p className="game-description">
                {this.game.description}
              </p>
              {this.game.website && 
                <p className="game-website">
                  <b className="website-title">{'Website: '}</b>
                  <a className="website-link" target="_blank" rel="nofollow noopener noreferrer" href={this.game.website}>{this.game.website}</a>
                </p>
              }
              <div className="screenshots">
                <h3>{'Screenshots:'}</h3>
                <div className="screenshot-list">
                  {
                    this.game.screenshots.map((screenshot, i) => (
                      <img key={i} className="game-screenshot" src={screenshot} alt={this.game.title + ' screenshot'} onClick={(e) => this.loadModalImage(screenshot)}/>
                    )
                  )}
                </div>
              </div>
              <div className="platforms">
              <h3>{'Owned on:'}</h3>
              <div className="platform-list">
                { this.game.platforms.map((platform, i) => (
                  <Platform key={i} platform={platform}/>
                ))}
              </div>
            </div>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default ViewGame;
