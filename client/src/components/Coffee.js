import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class Coffee extends React.Component {
  render () {
    const { blend, flavor, variety, origin} = this.state
    return (
      <Card color='blue'>
        <Card.Content header={blend} />
        <Card.Content description={flavor} />
        <Card.Content description={origin} />
        <Card.Content extra>
          <Icon name='coffee' />
          {variety}
        </Card.Content>
      </Card>
    )
  }
}

export default Coffee;
