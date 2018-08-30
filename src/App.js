import React, { Component } from 'react';
import './grid.css';
import PizzaManager from './components/pizza/PizzaManager';
import MenuComponent from './components/MenuComponent';
import OrderList from './components/order/OrderList';
import CompletedOrderList from './components/completedorder/CompletedOrderList';
import AppName from './components/ui/AppName';
import TopBar from './components/ui/TopBar';

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
        <div className="layoutGrid">
          <div>
            <AppName/>
          </div>
          <div>
            <TopBar/>
          </div>
          <div className="dashboardcontainer">
            <MenuComponent clickHandler={this.dashboardHandler} activeOrdersButtonName={this.state.activeOrdersButtonName}
            pizzasButtonName={this.state.pizzasButtonName} completedOrdersButtonName={this.state.completedOrdersButtonName}/>
          </div>
          <div className="contentcontainer">
            {this.state.activeTab}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
