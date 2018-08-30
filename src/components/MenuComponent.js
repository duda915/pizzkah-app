import React, { Component } from 'react';
import './MenuComponent.css';
import mainLogo from '../res/logo.png';

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="menuComponentLayout">
                <div className="menuComponent">
                <br/>
                    <div className="centerLogo">
                        <img src={mainLogo} className="logo" alt="mainLogo"/>
                    </div>
                    <hr/>
                    <br/>
                    <ul>
                        <li><button className="menuButton" onClick={this.props.clickHandler} name={this.props.activeOrdersButtonName}>
                            Active Orders
                        </button></li>
                        <li><button className="menuButton" onClick={this.props.clickHandler} name={this.props.pizzasButtonName}>
                            Pizzas
                        </button></li>
                        <li><button className="menuButton" onClick={this.props.clickHandler} name={this.props.completedOrdersButtonName}>
                            Completed Orders
                        </button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuComponent;