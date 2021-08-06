import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FeedBack from './pages/FeedBack';
import { Login, Game, Settings } from './pages/index';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/feedback" component={ FeedBack } />
      </Switch>
    </div>
  );
}
