/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../components/Header';
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  Typography
} from '@mui/material';
import { StyledCard, StyledDiv, StyledFormDiv } from './Style';

const LoginPage = () => {
  return (
    <diStyledDivv>
      <Header buttonName="Sign-Up" />
      <StyledDiv>
        <StyledCard>
          <CardContent>
            <Typography variant="h4" sx={{ marginLeft: `10px` }}>
              Login
            </Typography>
            <StyledFormDiv>
              <FormControl sx={{ marginTop: `20px` }}>
                <TextField id="filled-basic" label="Enter your Email" variant="filled" />
              </FormControl>
              <FormControl sx={{ marginTop: `20px` }}>
                <TextField id="filled-basic" label="Enter your Password" variant="filled" />
              </FormControl>
            </StyledFormDiv>
          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ marginLeft: `10px` }}>
              Login
            </Button>
          </CardActions>
        </StyledCard>
      </StyledDiv>
    </diStyledDivv>
  );
};

export default LoginPage;
