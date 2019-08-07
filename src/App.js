import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import GameViewPage from './Components/GameViewPage/GameViewPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import ScrollToTop from './Utils/ScrollToTop';
import './App.less';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/game/:gameId" component={GameViewPage}/>
                <Route path="/not-found" component={NotFoundPage}/>
                <Redirect from="*" to="/not-found"/>
              </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
