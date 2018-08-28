import React, {Component} from 'react';
import Order from './Order';

class OrderList extends Component {
    renderOrders() {
        fetch('http://localhost:8081/api/pizza', {
            method: 'get',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
        .catch(err => {
            console.log("Rest data error");
        });
    };

    render() {
        this.renderOrders();
        return (
            <Order orderDate="111" customerName="Adam Smith" phone="999999999" address="Warsaw" price="100"/>
        )
    };
}

export default OrderList;