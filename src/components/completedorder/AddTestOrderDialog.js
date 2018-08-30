import React, {Component} from 'react';


class AddTestOrderDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            phoneNumber: '',
            address: '',
            PizzaList: '',
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
    }

    componentDidMount() {
        this.handleAddPizzaButton();
    }

    renderSelectInputs() {
        console.log('renderSelectInputs, inputs count: ' + this.state.selectInputs.length)
        this.setState({
            PizzaList: this.state.selectInputs.map(input => {
                console.log(input.inputId);
                return <li key={input.inputId}>
                <label>
                    Pizza
                    <select
                    onChange={this.handleSelectChange} name={input.inputId.toString()}>
                        <option value="test">test</option>
                        <option value="test2">test2</option>
                    </select>
                </label>
            </li>
            
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
            selectInputValues: selectInputArray,
        }, () => console.log(this.state.selectInputValues));



    }

    handleAddOrder() {

    }

    handleAddPizzaButton() {

        //TODO insert default value
        let newInputObject = {
            inputId: this.state.selectInputs.length,
            value: '',
        }

        let inputObjectArray = Array.from(this.state.selectInputs);
        inputObjectArray.push(newInputObject);

        this.setState({
            selectInputs: inputObjectArray,
        }, () => this.renderSelectInputs());
    }

    

    render() {
        return (
            <div className="addOrderDialog">
                <h3> Add Test Order </h3>
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
                <ul>
                    {this.state.PizzaList}
                </ul>
                <button onClick={this.handleAddPizzaButton}>+</button>
                {this.state.DeletePizzaButton}
                <br/>
                <button onClick={this.props.closeDialog}>Close</button>
                <br/>
                <button onClick={this.handleAddOrder}>Add Order</button>

            </div>
        );
    }
}

export default AddTestOrderDialog;