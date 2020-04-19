import React, { useState,useEffect,useMemo,useContext } from 'react'
import { Button } from 'rbx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root : {
    padding : 15,
    background : '#f8f8f8',
    width : 340
  }
})

export default function Home() {
  const classes = useStyles();
  const valor = 10;
  //data
  const [ number, setNumber ] = useState(0);
  const [ status, setStatus ] = useState(false);



  //computed
  const numberAndValor = useMemo(()=>number + valor,[ number ])

  //mounted
  useEffect(()=>{
    increase();
  },[ status ])

  //method
  function increase(){
    setNumber(number + 1)
  }

  return (
    <div className={classes.root}>
      <Button onClick={increase} primary>
        {numberAndValor}
      </Button>
      <br />
      <br />
      <div>
        <Button onClick={()=>setStatus(!status)} color="success">
          Cambiar el status activa el efecto
        </Button>
        <span> { status ? 'Activo' : 'Inactivo' } </span>
      </div>
    </div>
  )
}
