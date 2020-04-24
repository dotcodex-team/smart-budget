import React, {Fragment} from 'react'
import { createUseStyles } from 'react-jss'
import Link from 'next/link'
import test from '../pages/test'
import { Menu } from 'rbx'

const arrayItem = [
    {
        titulo : 'titulo 1',
        path : '/titulo1',
        ocon : '',
        subItem: [{
            subTItulo: 'subtitulo 1',
            path: '/subtitulo1'
        }]
    },       
    {
        titulo : 'titulo 2',
        path : '/titulo2',
        ocon : '',
        subItem:[{
            subTItulo: 'subtitulo 2',
            path: '/index'
        }]
    }, 
    {
        titulo : 'titulo 3',
        path : '/titulo3',
        ocon : '',
        subItem: [{
            subTItulo: 'subtitulo 3',
            path: '/subtitulo3'
        } ]
    }
  
  ]

const Layout = (props) => { 
    const useStyles = createUseStyles({
        root: {
            display : 'inline-flex'
        },
        sidebar : {
            padding : 15,
            background : '#f8f8f8',
            width : 330, 
            height: '100vh',
            "& p" : {
                color : 'red'
            }
        }
    })

    const classes = useStyles()
    
    return (
         <div  className={classes.root}>
            <Menu className={classes.sidebar}>
                <Menu.Label>General</Menu.Label>
                {
                    arrayItem.map((item, index) =>
                        <Menu.List key={index}> { item.titulo} 
                        {
                            item.subItem.map((ite, index) => 
                            <Link href={ite.path} key={index}>
                                <Menu.List.Item>                                                                 
                                         {ite.subTItulo}                                   
                                </Menu.List.Item>
                            </Link>
                            )
                        }                
                        </Menu.List>
                    )
                }      
            </Menu>
            {props.children}
        </div>   
    )

}
export default Layout;