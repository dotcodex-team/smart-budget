import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Grid, InputAdornment } from '@material-ui/core';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import Axios from 'axios';

const useStyle = makeStyles({
  root: {
    '& input': {
      color: 'gray'
    }
  },
  input: {
    margin: 0,
    marginBottom: 20,
    marginLeft: '15%',
    marginRight: '15%',
    border: '5px solid #F4F8F7',
    backgroundColor: '#F4F8F7',
    height: 65,
    '& svg': {
      color: 'gray'
    },
    '&:hover': {
      '& $underline': {
        '&::before': {
          borderBottomColor: 'transparent'
        }
      }
    }
  },
  button: {
    width: 300,
    color: 'white',
    height: 60,
    borderRadius: 30
  },
  underline: {
    '&::before': {
      borderBottomWidth: 1,
      borderBottomColor: 'transparent'
    }
  }
});

const SignIn = () => {
  const classes = useStyle();

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    // console.log(e.target.value);
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const enter = async e => {
    e.preventDefault();
    const response = await Axios.post('http://localhost:5000/api/auth/login', {
      email: datos.email,
      password: datos.password
    });
    console.log(response.data);
  };

  return (
    <>
      <form className={classes.root} onSubmit={enter}>
        <Grid justify="center" container>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            name="email"
            onChange={handleChange}
            className={classes.input}
            InputProps={{
              classes: { underline: classes.underline },
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            name="password"
            onChange={handleChange}
            className={classes.input}
            InputProps={{
              classes: { underline: classes.underline },
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            className={classes.button}
          >
            Sign In
          </Button>
        </Grid>
      </form>
    </>
  );
};
export default SignIn;
