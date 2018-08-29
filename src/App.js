import React, { Component } from 'react';
import './App.css';
import PizzaManager from './components/pizza/PizzaManager';
import Dashboard from './components/Dashboard';
import OrderList from './components/order/OrderList';
import CompletedOrderList from './components/completedorder/CompletedOrderList';

class App extends Component {
  //main view logic here
  constructor(props) {
    super(props);

    this.dashboardHandler = this.dashboardHandler.bind(this);

    this.state = {
      activeOrdersButtonName: 'activeOrders',
      pizzasButtonName: 'pizzaManager',
      completedOrdersButtonName: 'completedOrders',
      activeTab: <PizzaManager/>,

    }
  }


  dashboardHandler(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);

    let tabToRender;

    switch(name) {
      case this.state.activeOrdersButtonName: 
      tabToRender = (<OrderList/>);
      break;
      case this.state.pizzasButtonName:
      tabToRender = (<PizzaManager/>);
      break;
      case this.state.completedOrdersButtonName:
      console.log('Not implemented yet');
      tabToRender = (<CompletedOrderList/>);
      break;
      default:
      tabToRender = "Wrong Tab";
    }

    this.setState({
      activeTab: tabToRender,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="dashboardcontainer">
          <Dashboard clickHandler={this.dashboardHandler} activeOrdersButtonName={this.state.activeOrdersButtonName}
          pizzasButtonName={this.state.pizzasButtonName} completedOrdersButtonName={this.state.completedOrdersButtonName}/>
        </div>
        <div className="contentcontainer">
          {this.state.activeTab}
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
