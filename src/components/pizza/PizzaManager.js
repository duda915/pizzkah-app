import React, {Component} from 'react';
import Pizza from './Pizza';
import AddPizzaDialog from './AddPizzaDialog';
import '../Content.css';

class PizzaManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pizzas: null,
            visibleAddDialog: false,
        }

        this.handleAddPizzaButton = this.handleAddPizzaButton.bind(this);
        this.fetchPizzas = this.fetchPizzas.bind(this);
    }

    componentDidMount() {
        this.fetchPizzas();
    }

    handleAddPizzaButton() {
        //show add pizza dialog
        this.setState({
            visibleAddDialog: !this.state.visibleAddDialog,
        });
        console.log(this.state.visibleAddDialog);
    }   

    fetchPizzas() {

        fetch('http://localhost:8081/api/pizza?available=false', {
            method: 'get',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => {this.setState({
            Pizzas: data.map(pizza => 
                <div key={pizza.id}>
                    <Pizza pizzaId={pizza.id} pizzaName={pizza.name} ingredients={pizza.ingredients} price={pizza.price} 
                    available={pizza.available.toString()} />
                </div>)
        })
        console.log(data);
        })
        .catch(err => {
            console.log("Rest data error");
            console.log(err);
        });

    };

    render() {
        return (
            <div className="contentListWrap">
                <div className='addContentButtonDiv'>
                    <button onClick={this.handleAddPizzaButton}>Add Pizza</button>
                </div>

                <AddPizzaDialog visible={this.state.visibleAddDialog} hideDialog={this.handleAddPizzaButton}/>
                <div className="contentList">
                    {this.state.Pizzas}
                </div>

                <br/>

            </div>
        );
    };
}

export default PizzaManager;