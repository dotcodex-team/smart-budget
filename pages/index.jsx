import React, { useState, useEffect, useMemo } from 'react';
// import { Button } from 'rbx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Layout from '@layout';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    padding: 15,
    background: 'green',
    height: 500
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        className={classes.root}
        container
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Link href="/test">
            <Button component="span" variant="contained" color="primary">
              To the test
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
