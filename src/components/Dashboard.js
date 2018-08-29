import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        console.log('clicked');
    }

    render() {
        return (
            <ul>
                <li><button onClick={this.props.clickHandler} name={this.props.activeOrdersButtonName}>
                    Active Orders
                </button></li>
                <li><button onClick={this.props.clickHandler} name={this.props.pizzasButtonName}>
                    Pizzas
                </button></li>
                <li><button onClick={this.props.clickHandler} name={this.props.completedOrdersButtonName}>
                    Completed Orders
                </button></li>
            </ul>
        );
    }
}

export default Dashboard;