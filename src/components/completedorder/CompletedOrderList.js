import React, {Component} from 'react';
import CompletedOrder from './CompletedOrder';
import AddTestOrderDialog from './AddTestOrderDialog';

class CompletedOrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Orders: null,
            Dialog: null,
        }

        this.fetchOrders = this.fetchOrders.bind(this);
        this.handleShowAddTestOrderDialog = this.handleShowAddTestOrderDialog.bind(this);
    }
    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders() {

        fetch('http://localhost:8081/api/order/completed', {
            method: 'get',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => {this.setState({
            Orders: data.map(order => 
                <div key={order.id}>
                    <CompletedOrder orderId={order.id} orderDate={order.date} customerName={order.customerFirstName 
                    + ' ' + order.customerLastName} 
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

    handleShowAddTestOrderDialog() {
        if(this.state.Dialog === null) {
            this.setState({
                Dialog: (<AddTestOrderDialog closeDialog={this.handleShowAddTestOrderDialog}/>),
            })
        } else {
            this.setState({
                Dialog: null,
            })
        }
    }

    render() {
        return (
            <div className="contentListWrap">
            {this.state.Dialog}
                <div className='addContentButtonDiv'>
                    <button onClick={this.handleShowAddTestOrderDialog}>Add Test Order </button>
                </div>
                <div className='contentList'>
                    {this.state.Orders}
                </div>
                <br/>
            </div>
        )
    };
}

export default CompletedOrderList;