import React, { Component } from 'react';
import './App.css';
import PizzaManager from './components/pizza/PizzaManager';

class App extends Component {
  //main view logic here

  render() {
    return (
      <div className="App">
        <div className="dashboardcontainer">
          
        </div>
        <div className="contentcontainer">
          <PizzaManager/>
        </div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
