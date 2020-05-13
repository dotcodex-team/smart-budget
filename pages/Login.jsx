import React from 'react';
import { makeStyles, Grid, Card, Typography, Button } from '@material-ui/core';
import SignIn from '../components/auth/SignIn';
import Link from 'next/link';

const useStyle = makeStyles({
  root: {
    background: '#e0f2f1',
    color: 'blue',
    height: '100vh',
    width: '100%',
    padding: '0 7%'
  },
  grid1: {
    //  background: '#BFDAE1',
    color: 'white',
    height: 'calc(100% - 100px)',
    borderTopRightRadius: 0
  },
  grid2: {
    background: '#4EB1B6',
    color: 'white',
    height: 'calc(100% - 100px)',
    borderTopLeftRadius: 0
  },
  signInContainer: {
    height: '100%'
  },
  signupContainer: {
    height: '100%'
  },
  buton: {
    color: 'white',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 30,
    width: 300,
    height: 60
  },
  subTitulo: {
    margin: '25%',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center'
  }
});

export default function Login() {
  const classes = useStyle();
  const titulo = 'Hello, Friends';
  const subTitulo = 'Enter your personal details and start jouney with us';
  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid component={Card} item xs={12} md={7} className={classes.grid1}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.signInContainer}
          >
            <SignIn />
          </Grid>
        </Grid>
        <Grid component={Card} item xs={12} md={5} className={classes.grid2}>
          <Grid
            container
            // justify="center"
            // alignItems="center"
            className={classes.signupContainer}
          >
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Grid>
                <Typography variant="h2"> {titulo} </Typography>
              </Grid>
              <Grid className={classes.subTitulo}>
                <Typography variant="h5"> {subTitulo} </Typography>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <Button
                    variant="outlined"
                    className={classes.buton}
                    size="large"
                  >
                    Sing Up
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
