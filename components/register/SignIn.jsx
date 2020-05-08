import React from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyle = makeStyles({
  root: {},
  boton: {
    color: 'white',
    borderRadius: 30,
    width: 300,
    height: 60,
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'solid'
  },
  titulo: {
    color: 'white',
    fontWeight: 500
  },
  subTitulo: {
    margin: '15%',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
    color: 'white'
  }
});

const SignIn = () => {
  const classes = useStyle();

  const titulo = 'welcome back!';
  const subTitulo =
    'To keep connected with us please login with your personal info';
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography className={classes.titulo} variant="h2">
            {titulo}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subTitulo} variant="h5">
            {subTitulo}
          </Typography>
        </Grid>
        <Link href="/login">
          <Button variant="outlined" className={classes.boton}>
            Sign In
          </Button>
        </Link>
      </Grid>
    </>
  );
};
export default SignIn;
