import React from 'react'
import Coffee from './Coffee'
import { Grid } from 'semantic-ui-react'

const CoffeeList = ({coffees, deleteCoffee}) => {
  return (
    <Grid columns='equal'>
      {coffees.map(c =>
        <Coffee
          key={c.id}
          {...c}
          deleteCoffee={deleteCoffee}
        />
      )}
    </Grid>
  )
}

export default CoffeeList
