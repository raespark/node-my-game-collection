import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import FilterSideBar from '../FilterSidebar/FilterSidebar';
import GameList from '../GameList/GameList';
import GameData from '../../mockGameData';
import './homepage.less';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: GameData,
      genreFilters: [],
      platformFilters: [],
      ratingFilter: 0,
      textFilter: ''
    }

    this.filter = this.filter.bind(this);
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }

  filter() {
    let games = GameData;
    games = games.filter((game) => {
      let genreFilter = true;
      let platformFilter = true;
      let ratingFilter = true;
      let textFilter = true;

      this.state.genreFilters.forEach((genreId) => {
        genreFilter = genreFilter && game.genres.some(genre => genre.id === genreId);
      })

      this.state.platformFilters.forEach((platformId) => {
        platformFilter = platformFilter && game.platforms.some(platform => platform.id === platformId);
      })

      ratingFilter = game.rating >= this.state.ratingFilter;

      textFilter = game.title.toLowerCase().includes(this.state.textFilter.toLowerCase());

      return genreFilter && platformFilter && ratingFilter && textFilter;
    });

    this.setState({games});
  }

  addOrRemoveFilter(id, filterList) {
    let activeFilters = filterList;
    let activeIndex = activeFilters.indexOf(id);

    if(activeIndex > -1){
      activeFilters.splice(activeIndex, 1);
    }
    else {
      activeFilters.push(id);
    }

    return activeFilters;
  }

  handleToggleFilter(filter, type) {
    if(type === 0){
      this.setState({genreFilters: this.addOrRemoveFilter(filter, this.state.genreFilters)}, this.filter);
    }
    if(type === 1){
      this.setState({platformFilters: this.addOrRemoveFilter(filter, this.state.platformFilters)}, this.filter);
    }
    if(type === 2) {
      this.setState({ratingFilter: filter}, this.filter);
    }

    if(type === 3) {
      this.setState({textFilter: filter}, this.filter);
    }
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="home-page">
        <NavBar/>
        <FilterSideBar toggleFilter={this.handleToggleFilter}/>
        <div className = "body">
          <GameList games={this.state.games}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
