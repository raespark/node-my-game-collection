import React, { Component } from 'react';
import {logo, user} from '../../Utils/Images';
import classnames from 'classnames';
import './navbar.less';

class NavBar extends Component {
  render() {
    return (
      <div className={classnames('nav-bar', this.props.className)}>
        <div className = "nav-bar-logo logo">
          <img src={logo.image} alt={logo.text}/>
        </div>
        <hr className="nav-hr"/>
        <div className= "nav-links">
          <div className="nav-link text">
            {'HOME'}
          </div>
          <hr className="nav-hr"/>
          <div className="nav-link text">
            {'ADD'}
          </div>
          <hr className="nav-hr"/>
        </div>
        <div className="nav-right">
          <div className="user-log-in">
            <hr className="nav-hr"/>
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
