import React from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyle = makeStyles({
  root: {},
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

const SignUp = () => {
  const classes = useStyle();
  const titulo = 'Hello, Friends';
  const subTitulo = 'Enter your personal details and start jouney with us';
  return (
    <>
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid>
          <Typography variant="h2"> {titulo} </Typography>
        </Grid>
        <Grid className={classes.subTitulo}>
          <Typography variant="h5"> {subTitulo} </Typography>
        </Grid>
        <Grid item>
          <Link href="/register">
            <Button variant="outlined" className={classes.buton} size="large">
              Sing Up
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default SignUp;
