import React, {Component} from 'react';

class Order extends Component {
    pizzaList(pizzas) {
        return(
            <li>Pizza list </li>
        )
    }

    render() {
        return (
            <div className="order">
                <ul>
                    {this.pizzaList(0)}
                    <li> Date: {this.props.orderDate}</li>
                    <li> Customer: {this.props.customerName}</li>
                    <li> Phone: {this.props.phone}</li>
                    <li> Address: {this.props.address}</li>
                    <li> Price: {this.props.price}</li>
                </ul>
            </div>
        );
    }
}

export default Order