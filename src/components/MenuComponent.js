import React, { Component } from 'react';
import './MenuComponent.css';
import mainLogo from '../res/logo.png';

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: {
                activeOrders: 'menuButton',
                pizzaManager: 'menuButton',
                completedOrders: 'menuButton',
            }
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(event) {
        const target = event.target;
        const name = target.name;


        this.setState({
            classes: {
                activeOrders: 'menuButton',
                pizzaManager: 'menuButton',
                completedOrders: 'menuButton',
            }
        }, () => {
            let classesArray = JSON.parse(JSON.stringify(this.state.classes));
            classesArray[name] += ' active';
            this.setState({
                classes: classesArray,
            });
        });


        


        this.props.clickHandler(event);
    }

    render() {
        return (
            <div className="menuComponentLayout">
                <div className="menuComponent">
                <br/>
                    <div className="centerLogo">
                        <img src={mainLogo} className="logo" alt="mainLogo"/>
                    </div>
                    <br/>
                    <br/>
                    <ul>
                        <li><button className={this.state.classes.activeOrders} onClick={this.handleMenuClick} name={this.props.activeOrdersButtonName}>
                            Active Orders
                        </button></li>
                        <li><button className={this.state.classes.pizzaManager} onClick={this.handleMenuClick} name={this.props.pizzasButtonName}>
                            Pizzas
                        </button></li>
                        <li><button className={this.state.classes.completedOrders} onClick={this.handleMenuClick} name={this.props.completedOrdersButtonName}>
                            Completed Orders
                        </button></li>
                    </ul>

                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <div className="botMenu">
                        <a href="#">Site</a>
                        <br/>
                        <a href="http://localhost:8081/api/">API</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuComponent;