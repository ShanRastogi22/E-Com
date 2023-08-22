import React from 'react'
import Header from '../components/Header'
import { CardContent, CardActions, Button, TextField, FormControl } from '@mui/material'
import {StyledCard} from './Style'

const LoginPage = () => {
  return (
    <div>
      <Header buttonName="Sign-Up" />
      <StyledCard>
        <CardContent>
          <FormControl>
          <TextField id="filled-basic" label="Name" variant="filled" />
          </FormControl>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </StyledCard>
    </div>
  )
}

export default LoginPage
