import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
