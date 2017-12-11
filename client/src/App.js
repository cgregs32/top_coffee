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

  updateCoffee = (coffee) => {
    debugger
    axios({
      method: 'put',
      url: `/api/coffees/${coffee.id}`,
      data: coffee
    }).then(res => {
      let coffees = this.state.coffees.map ( c => {
        if (c.id === coffee.id)
          return res.data;
        return c;
      });
      this.setState({ coffees });
    })
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
          updateCoffee={this.updateCoffee}
          />
      </div>
    );
  }
}

export default App;
