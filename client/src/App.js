import React, { Component } from 'react';
import CoffeeForm from './components/CoffeeForm';
import CoffeeList from './components/CoffeeList';
import axios from 'axios';

class App extends Component {
  state = { coffees: [] }


  componentDidMount() {
    axios.get('/api/coffees').then(res => this.setState({coffees: res.data}));
  }

  createCoffee = (coffee) =>{
    axios({
      method: 'post',
      url: '/api/coffees',
      data: {coffee}
    }).then(res => {
        const {coffees} = this.state;
        this.setState({coffees: [...coffees, res.data]});
    });
  }

  updateCoffee = () =>{

  }

  deleteCoffee = (id) => {
    axios.delete(`/api/coffees/${id}`).then(() => {
      const { coffees } = this.state
      this.setState({coffees: coffees.filter(c => c.id !== id)});
    });

  }

  render() {
    return (
      <div>
        <h1>Coffee | Beans | Shop</h1>
        <CoffeeForm createCoffee={this.createCoffee}/>
        <CoffeeList
          coffees={this.state.coffees}
          deleteCoffee={this.deleteCoffee}
          />
      </div>
    );
  }
}

export default App;
