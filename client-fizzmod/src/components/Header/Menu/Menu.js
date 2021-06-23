import React,{ useState, useEffect } from 'react'
import { getMenuApi } from '../../../api/menu'

import './Menu.scss'

export default function Menu() {
    const [menuData, setMenuData] = useState([]);

    useEffect(()=>{
        getMenuApi().then( response => {
            const arrayMenu = [];
            response.menu.categories.forEach(item => {
                if(item){
                    arrayMenu.push(item);
                }
            });
            setMenuData(arrayMenu);
        });
    },[])

    return (
        <ul className="menu">
            {menuData.map( (data) => {
                
               return(<li key={data.title}>
                    <a href={data.href}>{data.title}</a>
                </li>);
            })
            }
        </ul>
    )
}
