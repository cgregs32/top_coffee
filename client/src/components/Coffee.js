import React from 'react'
import { Card, Icon, Grid, Segment, Button } from 'semantic-ui-react'

class Coffee extends React.Component {
  render () {
    const { blend, flavor, variety, origin, id} = this.props;
    return (
      <Grid.Column width={4}>
        <Segment>
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
                <Button onClick={() => this.props.deleteCoffee(id)} basic color='red'>Delete</Button>
              </div>
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Coffee;
