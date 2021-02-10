import React from 'react'
import {Container, Divider, Grid} from "semantic-ui-react";

const Album = () => {
  return(
      <Container>
        <Grid>
          <Grid.Column computer={4} tablet={6} mobile={16}>
            <div>영역1</div>
          </Grid.Column>
          <Grid.Column computer={12} tablet={10} mobile={16}>
            <div>영역2</div>
          </Grid.Column>
        </Grid>
        <Divider />
        <div>영역3</div>
      </Container>
  )
}

export default Album