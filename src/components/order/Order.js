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