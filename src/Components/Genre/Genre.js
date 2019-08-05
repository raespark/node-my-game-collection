import React, { Component } from 'react';
import './genre.less';

class FilterSideBar extends Component {
  render() {
    return (
      <div className={this.props.className + ' genre'}>
        {this.props.genre}
      </div>
    );
  }
}

export default FilterSideBar;
