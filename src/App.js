import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Order from "./components/Order";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="dashboardcontainer">
          <Order orderDate="111" customerName="Adam Smith" phone="999999999" address="Warsaw" price="100"/>
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
