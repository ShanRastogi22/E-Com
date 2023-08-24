/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Header from '../components/Header';
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  Typography,
  Select,
  MenuItem
} from '@mui/material';
import { StyledCard, StyledDiv, StyledFormDiv } from './Style';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

const SignUpPage = () => {
  const {formData, setFormData} = useState({});
  return (
    <diStyledDivv>
      <Header buttonName="Sign-Up" />
      <StyledDiv>
        <StyledCard>
          <CardContent>
            <Typography variant="h4" sx={{ marginLeft: `10px` }}>
              Sign-Up
            </Typography>

            <StyledFormDiv>
              <FormControl sx={{ marginTop: `20px` }}>
                <TextField 
                id="filled-basic" 
                label="Enter your Email" 
                variant="filled" 
                name="name"
                onChange={handleChange}
                />
              </FormControl>

              <FormControl sx={{ marginTop: `20px` }}>
                <TextField 
                id="filled-basic" 
                label="Enter your Name" 
                variant="filled" 
                name='email'
                onChange={handleChange}
                
                />
              </FormControl>

              <FormControl sx={{ marginTop: `20px` }}>
                <TextField 
                id="filled-basic" 
                label="Enter your Password" 
                variant="filled" 
                name='password'
                onChange={handleChange}
                />
              </FormControl>

              <Box sx={{ minWidth: 120, marginTop: `20px` }}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="demo-simple-select-readonly-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    label="Age"
                    onChange={handleChange}
                    >

                      
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>User</MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </StyledFormDiv>
          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ marginLeft: `10px` }}>
              Sign-Up
            </Button>
          </CardActions>
        </StyledCard>
      </StyledDiv>
    </diStyledDivv>
  );
};

export default SignUpPage;
