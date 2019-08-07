import React, { Component } from 'react';
import classnames from 'classnames';
import './platform.less';

class Genre extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, 'platform')} onClick={this.props.onClick}>
        <img className="platform-logo" src={this.props.platform.logo} alt={this.props.platform.name}/>
      </div>
    );
  }
}

export default Genre;
