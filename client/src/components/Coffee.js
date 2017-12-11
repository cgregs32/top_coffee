import React from 'react'
import { Card, Icon, Grid, Segment, Button, Form } from 'semantic-ui-react'

class Coffee extends React.Component {
  state={ editing: true, blend: this.props.blend,
          flavor: this.props.flavor, variety: this.props.flavor,
          origin: this.props.origin, id: this.props.id }

  handleSubmit = (e) => {
    console.log('click')
    e.preventDefault();
    const { blend, flavor, variety, origin, id} = this.state;
    const coffee = { blend, flavor, variety, origin, id}
    this.props.updateCoffee(coffee);
    this.toggleEdit();
  }

  toggleEdit = () => {
    const {editing} = this.state;
    this.setState({editing: !editing})
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  editCard = () => {
    const { blend, flavor, variety, origin, id} = this.props;

    return(
      <Form className='ui container' onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Blend</label>
          <input name="blend" defaultValue={blend} placeholder='Blend' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Flavor</label>
          <input name="flavor" defaultValue={flavor} placeholder='Flavor' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Origin</label>
          <input name="origin" defaultValue={origin} placeholder='Origin' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Variety</label>
          <input name="variety" defaultValue={variety} placeholder='Variety' onChange={this.handleChange} />
        </Form.Field>
        <div className='ui two buttons'>
          <Button primary onClick={() => this.toggleEdit()} type='submit'>Cancel</Button>
          <Button secondary type='submit'>Edit</Button>
        </div>
      </Form>
    )
  }

  showCard = () => {
    const { blend, flavor, variety, origin, id} = this.props;
    return (
      <Card color='blue'>
        <Card.Content header={blend} />
        <Card.Content description={flavor} />
        <Card.Content description={origin} />
        <Card.Content extra>
          <Icon name='coffee' />
          {variety}
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button primary onClick={() => this.toggleEdit()} type='submit'>Edit</Button>
            <Button onClick={() => this.props.deleteCoffee(id)} basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }

  render () {
    return (
      <Grid.Column width={4}>
        <Segment>
          {this.state.editing ? this.showCard() : this.editCard()}
        </Segment>
      </Grid.Column>
    )
  }
}

export default Coffee;
