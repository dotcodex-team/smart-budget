import React, {Fragment} from 'react'
import { Menu } from 'rbx'
import { createUseStyles } from 'react-jss'
import Link from 'next/link'
import Layout from '../components/Layout'

const useStyles = createUseStyles({
    root : {
      padding : 15,
      background : '#f8f8f8',
      width : 330, 
      height: '100vh',
      "& p" : {
          color : 'red'
      }
    }
  })




 

export default function Test(){
    const classes = useStyles()
    const pids = ['id1', 'id2', 'id3']
   
    return (
    <Fragment>
        
        <Layout>jiiiii</Layout>
        
        
    </Fragment>    
    )


}