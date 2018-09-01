import React, {Component} from 'react';
import '../Card.css';
import '../Order.css';

class CompletedOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PizzaList: null,
        }
        
        this.populatePizzaList = this.populatePizzaList.bind(this);

    }

    componentDidMount() {
        this.populatePizzaList();
    }

    populatePizzaList() {
        console.log(this.props.pizzaList);
        this.setState({
            PizzaList: this.props.pizzaList.map(pizza => 
                <li key={pizza.id}>{pizza.pizza.name}</li>
            )}
        );
    }

    render() {
        return (
            <div className="card">
                <div className='cardTitle'>
                    {this.props.customerName}
                </div>
                <div className='cardInfo'>
                    <ul>
                        <li> Date: {this.props.orderDate}</li>
                        <li> Customer: {this.props.customerName}</li>
                        <li> Phone: {this.props.phone}</li>
                        <li> Address: {this.props.address}</li>
                        <li> Price: {this.props.price}</li>
                        <br/>
                        <div className='orderList'>
                            Pizza List:
                            <ul>
                            {this.state.PizzaList}
                            </ul>
                        </div>               
                    </ul>
                </div>
            </div>
        );
    }
}

export default CompletedOrder;