import React from 'react'
import { Links } from '../../../const/const'

import './TopNav.scss'

export default function TopNav() {
    return (
        <ul className="top-nav">
            {
               Links.map((data) =>{
                   return(
                       <li key={data.title}>
                           <a href={data.url} >{data.title}</a>
                       </li>
                   )
               })
            }
        </ul>
    )
}
