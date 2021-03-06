import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Data from './components/Data';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    <style jsx>{`
      body {
        background: #314455;
        color: #F39E02;
        text-align: center;
        font-family: 'Atomic Age', cursive;
      }
    `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/data' component={Data} />
        </Switch>
      </div>
    );
  }
}

export default App;
