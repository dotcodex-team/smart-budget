import React from 'react'
import { Button } from 'semantic-ui-react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Button primary>Hola Mundo</Button>
    </div>
  )
}
