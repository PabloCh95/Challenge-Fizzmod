import React from 'react'
import { array } from '../../../const/const';

import './Menu.scss'

export default function Menu() {
    return (
        <div className="menu">
            {array.menu.categories.map( (data) => {
               return(<ul>
                    <a href={data.href}>{data.title}</a>
                </ul>);
            })
            }
        </div>
    )
}
