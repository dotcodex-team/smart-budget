import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
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
  }
});

const SignIn = () => {
  const classes = useStyle();
  return (
    <>
      <Grid>
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
