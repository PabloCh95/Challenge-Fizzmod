import React from 'react'
import { Links } from '../../../const/const'

import './TopNav.scss'

export default function TopNav() {
    return (
        <div className="top-nav">
            {
               Links.map((data) =>{
                   return(
                       <ul key={data.title}>
                           <a href={data.url} >{data.title}</a>
                       </ul>
                   )
               })
            }
        </div>
    )
}
