import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './notfoundpage.less';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <NavBar/>
        <div className="body">
          <h1>{'- 404! Not Found -'}</h1>
          <h3>{'Did you take a wrong turn in the lost woods?'}</h3>
          <h3>{'Happens to everyone.Just try starting over from the beginning, I\'m sure you\'ll get it this time!'}</h3>
        </div>
      </div>
    );
  }
}

export default NotFound;
