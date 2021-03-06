import React, {Component} from 'react';
import '../Dialog.css';


class AddPizzaDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            ingredientsInput: "",
            priceInput: "",
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {

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
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    render() {
        if(this.props.visible === true) {
            return(
                <div className="dialogBackground">
                    <div className='dialog'>
                        <div className='topBar'>
                             Add Pizza
                        </div>
                        <div className='dialogContent'>
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
                            <div className='buttonGrid'>
                                <button onClick={this.handleSubmit} >Add </button>
                                <button onClick={this.props.hideDialog}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
        
    }
}

export default AddPizzaDialog;