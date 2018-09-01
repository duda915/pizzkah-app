import React, {Component} from 'react';
import '../Dialog.css';
import './AddTestOrderDialogFix.css';


class AddTestOrderDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            phoneNumber: '',
            address: '',
            PizzaList: '',
            SelectOptions: '',
            optionsMap: '',
            selectInputs: '',
            DeletePizzaButton: null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddOrder = this.handleAddOrder.bind(this);
        this.renderSelectInputs = this.renderSelectInputs.bind(this);
        this.handleAddPizzaButton = this.handleAddPizzaButton.bind(this);
        this.handleDeleteInput = this.handleDeleteInput.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.populateSelectInput = this.populateSelectInput.bind(this);
    }

    componentWillMount() {
    }
    componentDidMount() {
        this.populateSelectInput();
    }

    renderSelectInputs() {
        console.log('renderSelectInputs, inputs count: ' + this.state.selectInputs.length);
        console.log(this.state.SelectOptions);
        this.setState({
            PizzaList: this.state.selectInputs.map(input => {
                console.log(input.inputId);
                return <div className='item' key={input.inputId}>
                    
                    <select
                    onChange={this.handleSelectChange} name={input.inputId.toString()}>
                        {this.state.SelectOptions}
                    </select>
            </div>
            
            } )
        });

        if(this.state.selectInputs.length > 1) {
            this.setState({
                DeletePizzaButton: (
                    <button onClick={this.handleDeleteInput}>-</button>
                )
            });
        } else {
            this.setState({
                DeletePizzaButton: null,
            })
        }

        
    }

    handleDeleteInput() {
        if(this.state.selectInputs.length < 2)
            return;

        let selectInputsPop = Array.from(this.state.selectInputs);
        selectInputsPop.pop();

        this.setState({
            selectInputs: selectInputsPop,
        }, () => this.renderSelectInputs());
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSelectChange(event) {
        const target = event.target;
        const id = target.name;
        const value = target.value;

        console.log('select input id: ' + id);

        let selectInputArray = Array.from(this.state.selectInputs);
        selectInputArray[id].value = value;

        this.setState({
            selectInputs: selectInputArray,
        }, () => console.log(this.state.selectInputs));
    }

    populateSelectInput() {

        // fetch options and populate
        fetch('http://localhost:8081/api/pizza', {
            method: 'get',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => {this.setState({
            optionsMap: data.map(pizza => {
                return ({
                    value: pizza.id,
                    pizzaName: pizza.name,
                });
            }
            )
        }, () => {
            this.setState({
            SelectOptions: this.state.optionsMap.map(option => 
            <option key={option.value} value={option.value}>{option.pizzaName}</option> )
        })

        this.handleAddPizzaButton();
        }
        )
        console.log(data);
        })
        .catch(err => {
            console.log("Rest data error");
            console.log(err);
        });
    }

    handleAddOrder() {
        let customerName = this.state.customerName.split(' ');
        let customerFirstName = customerName[0];
        let customerLastName = customerName[1];

        let newOrder = {
            id: null,
            customerFirstName: customerFirstName,
            customerLastName: customerLastName,
            date: new Date().toISOString(),
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            done: false,
            orderDataList: this.state.selectInputs.map(input => {
                return({
                    id: null,
                    pizza: {
                        id: input.value,
                    }
                })
            })
        };

        fetch('http://localhost:8081/api/order', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(newOrder),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

        console.log(newOrder);

        this.props.closeDialog();
    }

    handleAddPizzaButton() {
        //TODO insert default value
        let newInputObject = {
            inputId: this.state.selectInputs.length,
            value: this.state.optionsMap[0].value.toString(),
        }

        let inputObjectArray = Array.from(this.state.selectInputs);
        inputObjectArray.push(newInputObject);

        this.setState({
            selectInputs: inputObjectArray,
        }, () => this.renderSelectInputs());
    }

    

    render() {
        return (
            <div className="dialogBackground">
                <div className='dialog'>
                    <div className='topBar'>
                        Add Test Order
                    </div>
                    <div className='dialogContent'>
                        <label>
                            Customer name:
                            <input type="text" value={this.state.customerName} name="customerName" onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Phone number:
                            <input type="text" value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Address:
                            <input type="text" value={this.state.address} name="address" onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <div className='pizzaList'>
                            {this.state.PizzaList}
                        </div>
                        <br/>
                        <div className='buttonGrid'>
                            <button onClick={this.handleAddPizzaButton}>+</button>
                            {this.state.DeletePizzaButton}
                        </div>
                        <br/>
                    
                    <div className='buttonGrid'>
                        <button onClick={this.handleAddOrder}>Add Order</button>
                        <button onClick={this.props.closeDialog}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTestOrderDialog;