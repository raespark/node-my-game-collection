import React, { Component } from 'react';
import classnames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
import FilterGroup from './FilterGroup/FilterGroup';
import StarRating from '../StarRating/StarRating';
import {arrow} from '../../Utils/Images';
import './filtersidebar.less';


class FilterSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      canCollapse: false
    }

    this.resize = this.resize.bind(this);
    this.collapseSideBar = this.collapseSideBar.bind(this);
  }

  //Check for resize to collapse sidebar
  //Code from: https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentCollapse = (window.innerWidth <= 960);
    if (currentCollapse !== this.state.canCollapse) {
      this.setState({canCollapse: currentCollapse, collapse: currentCollapse});
    }
  }

  collapseSideBar() {
    console.log('CLICK!');
    let collapse = !this.state.collapse;
    this.setState({collapse});
  }

  genreList = ['Point-and-click', 'Fighting', 'Rhythm', 'Visual Novel',
    'Platformer', 'Puzzle', 'Racing', 'RTS', 'RPG', 'JRPG',
    'Simulator', 'Strategy', 'TBS', 'Tactical', 'Beat \'em Up', 
     'Adventure', 'Indie'];
  platforms = ['Mac', 'PC', 'Switch', 'PS4',
    'PS3', 'PS2', 'Steam', '3DS', 'Wii', 'WiiU', 'DS']
  
  render() {
    return (
      <div className={classnames({collapsable: this.state.canCollapse}, {collapsed: this.state.collapse},'filter-side-bar')}>
        <div className="sidebar-body">
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
        <div className="side-bar-collapsable" onClick={this.collapseSideBar}>
          <img src={arrow.image} alt={arrow.text}/>
        </div>
      </div>
    );
  }
}

export default FilterSideBar;
