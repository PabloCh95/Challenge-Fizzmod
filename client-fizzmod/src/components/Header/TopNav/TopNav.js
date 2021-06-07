import React from 'react'
import { Links } from '../../../const/const'

import './TopNav.scss'

export default function TopNav() {
    return (
        <div className="top-nav">
            {
               Links.map((data) =>{
                   return(
                       <ul>
                           <a href={data.url} >{data.title}</a>
                       </ul>
                   )
               })
            }
        </div>
    )
}
