import React from 'react'
import { Button } from 'rbx'
import { useRouter } from 'next/router'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default function Home() {
  const classes = useStyles();
  const routes = useRouter();

  return (
    <div>
      <Button primary>{routes.query.id}</Button>
    </div>
  )
}
