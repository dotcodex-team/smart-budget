import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import SignIn from '../components/login/SignIn';
import SignUp from '../components/login/SignUp';

const useStyle = makeStyles({
  root: {
    background: 'green',
    color: 'blue'
  }
});

export default function Login() {
  const style = useStyle();
  return (
    <>
      <Container className={style.root}>
        <SignIn></SignIn>
        <SignUp></SignUp>
      </Container>
    </>
  );
}
