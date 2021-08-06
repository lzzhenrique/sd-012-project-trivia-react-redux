import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Config from './pages/Config';
import FeedBack from './pages/FeedBack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/game" component={ Game } />
            <Route path="/config" component={ Config } />
            <Route path="/feedback" component={ FeedBack } />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
