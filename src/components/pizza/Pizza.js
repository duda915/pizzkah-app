import React, {Component} from 'react';
import './Pizza.css';

class Pizza extends Component {
    render() {
        return (
            <div className="pizza">
                <h3>{this.props.pizzaName}</h3>

                <ul >
                    <li > Id: {this.props.pizzaId}</li>
                    <li> Name: {this.props.pizzaName}</li>
                    <li> Ingredients: {this.props.ingredients}</li>
                    <li> Price: {this.props.price}</li>
                    <li> Available: {this.props.available}</li>
                </ul>
            </div>
        );
    }
}

export default Pizza;