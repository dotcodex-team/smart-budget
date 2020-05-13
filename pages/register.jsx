import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SignUp from '../components/auth/SignUp';
import Link from 'next/link';

const useStyle = makeStyles({
  root: {
    padding: '0 7%',
    height: '100vh',
    backgroundColor: '#F0F4F3'
  },
  grid1: {
    background: '#4EB19C',
    height: 'calc(100% - 100px)'
  },
  grid2: {
    background: '#FFFFFF',
    height: 'calc(100% - 100px)'
  },
  SignInContainer: {
    height: '100%'
  },
  signUpContainer: {
    height: '100%'
  },
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
    margin: '10%',
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white'
  }
});

export default function Register() {
  const classes = useStyle();
  const titulo = 'welcome back!';
  const subTitulo =
    'To keep connected with us please login with your personal info';
  return (
    <>
      <Grid container className={classes.root} alignItems="center">
        <Grid component={Card} className={classes.grid1} item xs={5}>
          <Grid
            container
            // alignItems="center"
            // justify="center"
            className={classes.SignInContainer}
          >
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Typography className={classes.titulo} variant="h2">
                {titulo}
              </Typography>

              <Typography className={classes.subTitulo} variant="h5">
                {subTitulo}
              </Typography>

              <Link href="/login">
                <Button variant="outlined" className={classes.boton}>
                  Sign In
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid component={Card} item xs={7} className={classes.grid2}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.signUpContainer}
          >
            <SignUp></SignUp>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
