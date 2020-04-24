import React, {Fragment} from 'react'
import { Menu } from 'rbx'

import Link from 'next/link'

const Sidebar = () => {

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



} 
export default Sidebar