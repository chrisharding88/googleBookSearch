import React, { Component } from 'react';
import Button from './Components/Button';
import Grid from './Components/Grid';
import Saved from './Pages/Saved';
import Jumbotron from './Components/Jumbotron/';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron></Jumbotron>
        <Saved></Saved>
      </div>
    );
  }
}

export default App;
