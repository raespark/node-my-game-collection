import React, { Component } from 'react';
import classnames from 'classnames';
import GameCard from '../GameCard/GameCard';
import {arrow} from '../../Utils/Images';
import './gamelist.less';

class GameList extends Component {  
  constructor(props) {
    super(props);

    this.paginationOffset = 8;

    this.state = {
      games: this.props.games.slice(0, this.paginationOffset),
      currentOffset: this.paginationOffset,
      canPageUp: this.props.games.length > this.paginationOffset,
      canPageDown: false
    }

    this.canPageUp = this.canPageUp.bind(this);
    this.canPageDown = this.canPageDown.bind(this);

    this.handlePageUp = this.handlePageUp.bind(this);
    this.handlePageDown = this.handlePageDown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({currentOffset: this.paginationOffset, 
      games: newProps.games.slice(0, this.paginationOffset),
      allGames: newProps.games,
      canPageUp: newProps.games.length > this.paginationOffset,
      canPageDown: false
    });
  }

  canPageUp(offset = this.state.currentOffset) {
    return this.props.games.length > offset;
  }

  canPageDown(offset = this.state.currentOffset) {
    return this.props.games.length < offset;
  }

  handlePageUp() {
    if(this.state.canPageUp) {
      let newOffset = this.state.currentOffset + this.paginationOffset;
      let newGames;
      
      if(this.props.games.length < newOffset) {
        newGames = this.props.games.slice(this.state.currentOffset, newOffset);
      }
      else {
        newGames = this.props.games.slice(this.state.currentOffset);
      }
      
      this.setState({currentOffset: newOffset, games: newGames, canPageUp: this.canPageUp(newOffset), canPageDown: true});
    }
  }

  handlePageDown() {
    if(this.state.canPageDown) {
      let newOffset = this.state.currentOffset - this.paginationOffset;

      let newGames = this.props.games.slice(newOffset - this.paginationOffset, newOffset);

      this.setState({currentOffset: newOffset, games: newGames, canPageDown: this.canPageDown(newOffset), canPageUp: true});
    }
  }

  render() {
    return (
      <div className="game-list">
        <div className="pagination">
            <div className="page-down" onClick={this.handlePageDown}>
              <img
                src={arrow.image}
                alt={arrow.text}
                className={classnames('back-arrow', {disabled: !this.state.canPageDown})}
              />
            </div>
            <div className="page-up" onClick={this.handlePageUp}>
              <img
                src={arrow.image}
                alt={arrow.text}
                className={classnames('forward-arrow', {disabled: !this.state.canPageUp})}
              />
            </div>
          </div>
        <hr/>
        {
          this.state.games.map((game, i) => (
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
          <div className="pagination">
            <div className="page-down" onClick={this.handlePageDown}>
              <img
                src={arrow.image}
                alt={arrow.text}
                className={classnames('back-arrow', {disabled: !this.state.canPageDown})}
              />
            </div>
            <div className="page-up" onClick={this.handlePageUp}>
              <img
                src={arrow.image}
                alt={arrow.text}
                className={classnames('forward-arrow', {disabled: !this.state.canPageUp})}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default GameList;
