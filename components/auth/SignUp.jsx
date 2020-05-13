import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {},
  boton: {
    marginTop: '5%',
    color: 'white',
    backgroundColor: '#4EB19C',
    width: 300,
    height: 60,
    borderRadius: 30
  },
  input: {
    marginBottom: 20,
    marginLeft: '15%',
    marginRight: '15%',
    borderColor: 'transparent',
    backgroundColor: '#F4F8F7'
  },
  underline: {
    '&::before': {
      borderBottomWidth: 2,
      borderBottomColor: 'transparent'
    }
  },
  titulo: {
    color: '#4EB19C',
    fontWeight: 500,
    marginBottom: '15%'
  }
});

const SignUp = () => {
  const [datosUp, setDatosUp] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    //   console.log(e.target.value);
    setDatosUp({ ...datosUp, [e.target.name]: e.target.value });
  };

  const enviar = async e => {
    e.preventDefault();
    // console.log('jii');
    console.log(`
    nombre : ${datosUp.name}  
    email: ${datosUp.email} 
    password: ${datosUp.password}  `);

    const response = await axios.post(
      'http://localhost:5000/api/auth/register',
      {
        username: datosUp.name,
        email: datosUp.email,
        password: datosUp.password
      }
    );
    console.log(response.data);

    // e.target.reset();
  };

  const classes = useStyle();
  const titulo = 'Create Account';
  return (
    <>
      <form onSubmit={enviar}>
        <Grid container justify="center">
          <Grid>
            <Typography className={classes.titulo} variant="h2">
              {titulo}
            </Typography>
          </Grid>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Name"
            fullWidth
            onChange={handleChange}
            name="name"
            InputProps={{
              classes: { underline: classes.underline }
            }}
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Email"
            fullWidth
            onChange={handleChange}
            name="email"
            InputProps={{
              classes: { underline: classes.underline }
            }}
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Password"
            fullWidth
            onChange={handleChange}
            name="password"
            InputProps={{
              classes: { underline: classes.underline }
            }}
          />

          <Button type="submit" className={classes.boton}>
            Sign UP
          </Button>
        </Grid>
      </form>
    </>
  );
};
export default SignUp;
