import React, {Component} from 'react';


class AddPizzaDialog extends Component {

    
    handleAddButton() {

    }

    render() {
        if(this.props.visible === true) {
            return(
                <div className="addPizzaDialog">
                    Name: 

                    <button onClick={this.props.hideDialog}>Close</button>
                </div>
            )
        }
        return null;
        
    }
}

export default AddPizzaDialog;