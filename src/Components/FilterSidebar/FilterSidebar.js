import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterGroup from './FilterGroup/FilterGroup';
import StarRating from '../StarRating/StarRating';
import './filtersidebar.less';


class FilterSideBar extends Component {
  genreList = ['Point-and-click', 'Fighting', 'Rhythm', 'Visual Novel',
    'Platformer', 'Puzzle', 'Racing', 'RTS', 'RPG', 'JRPG',
    'Simulator', 'Strategy', 'TBS', 'Tactical', 'Beat \'em Up', 
     'Adventure', 'Indie'];
  platforms = ['Mac', 'PC', 'Switch', 'PS4',
    'PS3', 'PS2', 'Steam', '3DS', 'Wii', 'WiiU', 'DS']
  
  render() {
    return (
      <div className="filter-side-bar">
        <h2 className="header">{'Filters'}</h2>
        <div className="filters">
          <div className="row">
            <SearchBar/>
          </div>
          <div className="row">
            <FilterGroup title='Genres' filters={this.genreList}/>
          </div>
          <div className="row">
            <h3>{'Rating'}</h3>
            <StarRating/>
          </div>
          <div className="row">
            <FilterGroup title='Platforms' filters={this.platforms}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterSideBar;
