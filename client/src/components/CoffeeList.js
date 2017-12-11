import React from 'react'
import Coffee from './Coffee'
import { Grid} from 'semantic-ui-react'

const CoffeeList = ({coffees}) => {
  return (
    <Grid columns='equal'>
      {coffees.map(c =>
        <Coffee
          key={c.id}
          {...c}
        />
      )}
    </Grid>
  )
}

export default CoffeeList
