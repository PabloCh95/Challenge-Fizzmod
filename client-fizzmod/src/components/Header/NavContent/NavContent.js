import React , { useState,useEffect} from 'react'
import { getMenuApi } from '../../../api/menu'
import { Links } from '../../../const/const'

import './NavContent.scss'

export default function NavContent() {
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
        <ul className="nav-content">
            { menuData.map( (data) => {
                    return(
                    <li key={data.title}>
                         <a href={data.href}>{data.title}</a>
                     </li>);
                 })
                 
            }
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
