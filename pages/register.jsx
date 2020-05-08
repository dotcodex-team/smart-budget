import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SignIn from '../components/register/SignIn';
import SignUp from '../components/register/SignUp';

const useStyle = makeStyles({
  root: {
    padding: '0 7%',
    height: '100vh'
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
  }
});

export default function Register() {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root} alignItems="center">
        <Grid component={Card} className={classes.grid1} item xs={5}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.SignInContainer}
          >
            <SignIn></SignIn>
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
