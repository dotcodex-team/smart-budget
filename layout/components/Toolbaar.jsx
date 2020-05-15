import React from 'react';
import Link from 'next/link';
import {
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import IndAvatar from './IndAvatar';

const useStyle = makeStyles({
  root: {},
  button: {
    width: 100,
    height: 50,
    marginTop: 5,
    color: 'gray'
  },
  grid1: {
    backgroundColor: '#e3f2fd'
  }
});

const Toolbaar = () => {
  const classes = useStyle();

  const titulos = [
    { titulo: ' hola1', path: '/prueba' },
    { titulo: ' hola2', path: '/prueba2' },
    { titulo: ' hola3', path: '/path3' }
  ];
  return (
    <>
      <Toolbar>
        <Grid container>
          <Grid item xs={7} className={classes.grid1}>
            {titulos.map((item, id) => (
              <Link href={item.path} key={id}>
                <Button className={classes.button}>
                  <Typography variant="subtitle2"> {item.titulo} </Typography>
                </Button>
              </Link>
            ))}
          </Grid>
          <Grid item xs={5}>
            <IndAvatar></IndAvatar>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};
export default Toolbaar;
