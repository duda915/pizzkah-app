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
                <EditPizzaDialog visible={this.state.visibleEditDialog} hideDialog={this.handleEditPizzaButton}
                pizzaName={this.props.pizzaName} pizzaIngredients={this.props.ingredients}
                pizzaPrice={this.props.price} available={this.props.available}
                pizzaId={this.props.pizzaId}/>

                <h3>{this.props.pizzaName}</h3>

                <ul >
                    <li > Id: {this.props.pizzaId}</li>
                    <li> Name: {this.props.pizzaName}</li>
                    <li> Ingredients: {this.props.ingredients}</li>
                    <li> Price: {this.props.price}</li>
                    <li> Available: {this.props.available}</li>
                </ul>
                <button onClick={this.handleEditPizzaButton}>Edit</button>
            </div>
        );
    }
}

export default Pizza;