import React, { Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {logo, user} from '../../Utils/Images';
import './navbar.less';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }

    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    let currentCollapse = this.state.collapsed;
    this.setState({collapsed: !currentCollapse});
  }

  render() {
    return (
      <div className="nav">
        <div className={classnames('nav-bar', {collapsed: this.state.collapsed})}>
          <div className = "nav-bar-logo logo">
            <img src={logo.image} alt={logo.text}/>
          </div>
          <hr className="nav-hr"/>
          <div className= "nav-links">
            <div className="nav-link">
              <Link to="/" className="text">
                {'HOME'}
              </Link>
            </div>
            <hr className="nav-hr"/>
            <div className="nav-link text">
              {'ADD'}
            </div>
            <hr className="nav-hr"/>
            <div className="nav-link text mobile-link">
              {'LOG IN'}
            </div>
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
        <div className="mobile-nav mobile-only">
          <div className="menu-icon" onClick={this.handleCollapse}>
            <div className="menu-bar">&nbsp;</div>
            <div className="menu-bar">&nbsp;</div>
            <div className="menu-bar">&nbsp;</div>
          </div>
          <div className = "nav-bar-logo logo">
            <img src={logo.image} alt={logo.text}/>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
