import React, {Component} from 'react';


class EditPizzaDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            ingredientsInput: "",
            priceInput: "",
            available: false,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        let isAvailable = (this.props.available === 'true')
        this.setState({
            nameInput: this.props.pizzaName,
            ingredientsInput: this.props.pizzaIngredients,
            priceInput: this.props.pizzaPrice,
            available: isAvailable,
        })

        console.log(this.props.pizzaId);
    }

    
    handleSubmit(event) {
        event.preventDefault();

        let newPizzaObject = {
            id: null,
            name: this.state.nameInput,
            ingredients: this.state.ingredientsInput,
            price: this.state.priceInput,
            available: this.state.available
        };
        console.log(newPizzaObject);

        fetch('http://localhost:8081/api/pizza?id='+this.props.pizzaId, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(newPizzaObject),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

        this.props.hideDialog();
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    render() {
        if(this.props.visible === true) {
            return(
                <div className="pizzaDialog">
                        <h3> Edit Pizza </h3>
                        <label>
                            Name: <input type="text" value={this.state.nameInput} name="nameInput" 
                            onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <label>
                            Ingredients: <input type="text" value={this.state.ingredientsInput} name="ingredientsInput" 
                                onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Price: <input type="text" value={this.state.priceInput} name="priceInput"
                            onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Available: <input type="checkbox" checked={this.state.available} name="available"
                            onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <input type="button" onClick={this.handleSubmit} value="Apply"/>
                        <button onClick={this.props.hideDialog}>Close</button>
                </div>
            )
        }
        return null;
        
    }
}

export default EditPizzaDialog;