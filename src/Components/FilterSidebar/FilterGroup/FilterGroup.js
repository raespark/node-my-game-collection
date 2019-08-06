import React, { Component } from 'react';
import classnames from 'classnames';
import Genre from '../../Genre/Genre';
import './filtergroup.less';

class FilterSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      activeFilters: [3, 6, 7]
    }
    this.state.filters.sort();
    this.state.filters.push('Other');
  }
  render() {
    return (
      <div className="filter-group">
        <h3 className="filter-group-header">{this.props.title}</h3>
        <div className="filter-list">
          {this.state.filters.map((filter, i) => (
            <div className={classnames({active: this.state.activeFilters.some(index => index === i)}, 'filter')} key={i}>
              <Genre genre={filter}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSideBar;
