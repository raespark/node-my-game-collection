import React, { Component } from 'react';
import {logo, user} from '../../Utils/Images';
import './navbar.less';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className = "nav-bar-logo logo">
          <img src={logo.image} alt={logo.text}/>
        </div>
        <hr/>
        <div className= "nav-links">
          <div className="nav-link text">
            {'HOME'}
          </div>
          <hr/>
          <div className="nav-link text">
            {'ADD'}
          </div>
          <hr/>
        </div>
        <div className="nav-right">
          <div className="user-log-in">
            <hr/>
            <div className="log-in-link">
              <img src={user.image} alt={user.text}/>
              <div className="text">
                {'LOG IN'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
