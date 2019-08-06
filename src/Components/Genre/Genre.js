import React, { Component } from 'react';
import classnames from 'classnames';
import './genre.less';

class Genre extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, 'genre')}>
        {this.props.genre}
      </div>
    );
  }
}

export default Genre;
