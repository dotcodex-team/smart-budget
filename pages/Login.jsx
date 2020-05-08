import React from 'react';
import { Container, makeStyles, Grid, Card } from '@material-ui/core';
import SignIn from '../components/login/SignIn';
import SignUp from '../components/login/SignUp';

const useStyle = makeStyles({
  root: {
    background: '#F0F4F3',
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
  }
});

export default function Login() {
  const classes = useStyle();
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
            <SignIn></SignIn>
          </Grid>
        </Grid>
        <Grid component={Card} item xs={12} md={5} className={classes.grid2}>
          <Grid
            container
            // justify="center"
            // alignItems="center"
            className={classes.signupContainer}
          >
            <SignUp></SignUp>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
