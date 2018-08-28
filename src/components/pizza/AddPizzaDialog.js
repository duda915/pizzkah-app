import React, {Component} from 'react';


class AddPizzaDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            ingredientsInput: "",
            priceInput: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleIngredientsInputChange = this.handleIngredientsInputChange.bind(this);
        this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
    }

    
    handleSubmit(event) {
        event.preventDefault();

        let newPizzaObject = {
            id: null,
            name: this.state.nameInput,
            ingredients: this.state.ingredientsInput,
            price: this.state.priceInput,
            available: true
        };
        console.log(newPizzaObject);

        fetch('http://localhost:8081/api/pizza', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(newPizzaObject), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        
    }

    handleNameInputChange(event) {
        this.setState({
            nameInput: event.target.value,
        });
    }

    handleIngredientsInputChange(event) {
        this.setState({
            ingredientsInput: event.target.value,
        });
    }

    handlePriceInputChange(event) {
        this.setState({
            priceInput: event.target.value,
        });
    }

    render() {
        if(this.props.visible === true) {
            return(
                <div className="addPizzaDialog">
                    <form onSubmit={this.handleSubmit}>
                        <h3> Add Pizza </h3>
                        <label>
                            Name: <input type="text" value={this.state.nameInput} onChange={this.handleNameInputChange} />
                        </label>
                        <br/>
                        <label>
                            Ingredients: <input type="text" value={this.state.ingredientsInput} 
                                onChange={this.handleIngredientsInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Price: <input type="text" value={this.state.priceInput} onChange={this.handlePriceInputChange}/>
                        </label>
                        <br/>
                        <input type="submit" value="Add"/>
                        <button onClick={this.props.hideDialog}>Close</button>
                    </form>
                </div>
            )
        }
        return null;
        
    }
}

export default AddPizzaDialog;