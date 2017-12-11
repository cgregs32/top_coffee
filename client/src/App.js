import React, { Component } from 'react';
import CoffeeForm from './components/CoffeeForm';
import CoffeeList from './components/CoffeeList';
import axios from 'axios';

class App extends Component {
  state = { coffees: [] }


  componentDidMount() {
    this.fetchCoffee();
  }

  fetchCoffee = () => {
    axios({
      method: 'get',
      url: '/api/coffee'
    }).then(res =>{
      this.setState({ coffees: res.data })
    }).catch(err => {
      console.log(err.data)
    });
  }

  createCoffee = (coffee) =>{
    axios({
      method: 'post',
      url: '/api/coffee',
      data: {coffee}
    }).then(res => {
        const {coffees} = this.state;
        this.setState({coffees: [...coffees, res.data]});
    });
  }

  updateCoffee = () =>{

  }

  deleteCoffee = () => {

  }

  render() {
    return (
      <div>
        <h1>Coffee | Beans | Shop</h1>
        <CoffeeForm createCoffee={this.createCoffee}/>
        <CoffeeList coffees={this.state.coffees} />
      </div>
    );
  }
}

export default App;
