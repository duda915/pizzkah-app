import React, {Component} from 'react';
import './Pizza.css';
import EditPizzaDialog from './EditPizzaDialog';

class Pizza extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleEditDialog: false,
        }

        this.handleEditPizzaButton = this.handleEditPizzaButton.bind(this);

    }

    handleEditPizzaButton() {
        this.setState({
            visibleEditDialog: !this.state.visibleEditDialog,
        })
    }

    render() {
        return (
            <div className="pizza">
                <div className="pizzaTitle">
                    {this.props.pizzaName} 
                    
                </div>
                <div className="pizzaInfo">
                    <ul >
                        <li > Id: {this.props.pizzaId}</li>
                        <li> Name: {this.props.pizzaName}</li>
                        <li> Ingredients: {this.props.ingredients}</li>
                        <li> Price: {this.props.price}</li>
                        <li> Available: {this.props.available}</li>
                    </ul>
                    <span className="editButton">
                        <button onClick={this.handleEditPizzaButton}>Edit</button>
                    </span> 
                </div>
                <EditPizzaDialog visible={this.state.visibleEditDialog} hideDialog={this.handleEditPizzaButton}
                pizzaName={this.props.pizzaName} pizzaIngredients={this.props.ingredients}
                pizzaPrice={this.props.price} available={this.props.available}
                pizzaId={this.props.pizzaId}/>
                
            </div>
        );
    }
}

export default Pizza;