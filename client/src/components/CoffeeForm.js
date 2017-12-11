import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class CoffeeForm extends React.Component {
  state = { blend: '', flavor: '', origin: '', variety: '' , id: 1}

  handleChange = (e) =>{
    let {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const { blend, flavor, variety, origin, id } = this.state
    const coffee = { blend, flavor, variety, origin, id: id }
    this.setState({ blend: '', flavor: '', origin: '', variety: '' , id: id + 1})
    this.props.createCoffee(coffee);
  }

  render () {
    const { blend, flavor, variety, origin} = this.state

    return (
      <Form className='ui container' onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Blend</label>
          <input name="blend" value={blend} placeholder='Blend' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Flavor</label>
          <input name="flavor" value={flavor} placeholder='Flavor' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Origin</label>
          <input name="origin" value={origin} placeholder='Origin' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Variety</label>
          <input name="variety" value={variety} placeholder='Variety' onChange={this.handleChange} />
        </Form.Field>
        <Button primary type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default CoffeeForm;
