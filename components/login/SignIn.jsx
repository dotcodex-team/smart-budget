import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Grid } from '@material-ui/core';

const useStyle = makeStyles({
  root: {},
  input: {
    margin: 20,
    marginTop: 0,
    marginLeft: '15%',
    marginRight: '15%',
    backgroundColor: '#F4F8F7'
  },
  button: {
    width: 300,
    color: 'white',
    height: 60,
    borderRadius: 30
  },
  underline: {
    '&::before': {
      borderBottomWidth: 2,
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
  const enter = e => {
    e.preventDefault();

    console.log(`email: ${datos.email} password: ${datos.password}`);
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
              classes: { underline: classes.underline }
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
              classes: { underline: classes.underline }
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
