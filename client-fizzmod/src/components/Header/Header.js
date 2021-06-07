import React from 'react'
import Logo from '../../assets/svg/logo_fizzmod.svg'
import Menu from './Menu'
import Search from './Search'
import TopNav from './TopNav'

import './Header.scss';

export default function Header() {
    return (
        <div className="header">
             <div className="header__top">
                 <img src={ Logo } />
                 <div className="header__top__components">
                    <TopNav />
                    <Search />
                 </div>
             </div>
             <Menu/>
        </div>
    )
}
