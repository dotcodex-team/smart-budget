import React, { useState, useEffect, useMemo } from 'react';
// import { Button } from 'rbx';
import { createUseStyles } from 'react-jss';
import Layout from '@components/Layout';

const useStyles = createUseStyles({
  root: {
    padding: 15,
    background: '#f8f8f8',
    width: 340
  }
});

export default function Test() {
  const classes = useStyles();

  const valor = 10;
  // data
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState(false);

  // computed
  const numberAndValor = useMemo(() => number + valor, [number]);
  // method
  function increase() {
    setNumber(number + 1);
  }

  // mounted
  useEffect(() => {
    increase();
  }, [status]);

  return (
    <Layout>
      <div className={classes.root}>
        <button type="button" onClick={increase} className="button is-primary">
          {numberAndValor}
        </button>
        <br />
        <br />
        <div>
          <button
            className="button is-info"
            type="button"
            onClick={() => setStatus(!status)}
            color="success"
          >
            Cambiar el status activa el efecto
          </button>
          <span> {status ? 'Activo' : 'Inactivo'} </span>
        </div>
      </div>
    </Layout>
  );
}
