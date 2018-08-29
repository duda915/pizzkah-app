import React, {Component} from 'react';
import './Order.css';

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PizzaList: null,
        }
        
        this.populatePizzaList = this.populatePizzaList.bind(this);
        this.handleCompleteOrder = this.handleCompleteOrder.bind(this);

    }

    componentDidMount() {
        this.populatePizzaList();
    }

    populatePizzaList() {
        console.log(this.props.pizzaList);
        this.setState({
            PizzaList: this.props.pizzaList.map(pizza => 
                <li key={pizza.id}>Name: {pizza.pizza.name}</li>
            )}
        );
    }

    handleCompleteOrder() {
        fetch('http://localhost:8081/api/order', {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(this.props.orderId),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="order">
                Order
                <ul>
                    <li> Date: {this.props.orderDate}</li>
                    <li> Customer: {this.props.customerName}</li>
                    <li> Phone: {this.props.phone}</li>
                    <li> Address: {this.props.address}</li>
                    <li> Price: {this.props.price}</li>
                    <br/>
                    Pizza List:
                    <ul>
                    {this.state.PizzaList}
                    </ul>
                    
                </ul>

                <button onClick={this.handleCompleteOrder}>Mark As Completed</button>
            </div>
        );
    }
}

export default Order;