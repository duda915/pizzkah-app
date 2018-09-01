import React, {Component} from 'react';
import Order from './Order';

class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Orders: null,
        }

        this.fetchOrders = this.fetchOrders.bind(this);
    }
    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders() {

        fetch('http://localhost:8081/api/order', {
            method: 'get',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => {this.setState({
            Orders: data.map(order => 
                <div key={order.id}>
                    <Order orderId={order.id} orderDate={order.date} customerName={order.customerFirstName} 
                    phone={order.phoneNumber} address={order.address} price={order.totalPrice} 
                    pizzaList={order.orderDataList}/>
                </div>)
        })
        console.log(data);
        })
        .catch(err => {
            console.log("Rest data error");
            console.log(err);
        });

    };

    render() {
        return (
            <div className="contentListWrap">
            <br/>
                <div className='contentList'>
                    {this.state.Orders}
                </div>
                <br/>
            </div>
        )
    };
}

export default OrderList;