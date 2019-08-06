import React, { Component } from 'react';
import classnames from 'classnames';
import Genre from '../../Genre/Genre';
import './filtergroup.less';

class FilterSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      activeFilters: []
    }
    this.state.filters.sort();
  }

  handleFilter(e, id, i) {
    let activeFilters = this.state.activeFilters;
    let activeIndex = activeFilters.indexOf(i);

    if(activeIndex > -1){
      activeFilters.splice(activeIndex, 1);
    }
    else {
      activeFilters.push(i);
    }
    
    this.setState({activeFilters}, this.props.toggleFilter(id));
  }

  render() {
    return (
      <div className="filter-group">
        <h3 className="filter-group-header">{this.props.title}</h3>
        <div className="filter-list">
          {this.state.filters.map((filter, i) => (
            <div className={classnames({active: this.state.activeFilters.some(index => index === i)}, 'filter')} key={i}>
              <Genre genre={filter.name} onClick={(e) => this.handleFilter(e, filter.id, i)}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSideBar;
