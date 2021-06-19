import React from 'react'
import Logo from '../../assets/svg/logo_fizzmod.svg'
import {AiOutlineMenu} from 'react-icons/ai';
import Menu from './Menu'
import Search from './Search'
import TopNav from './TopNav'
import NavContent from './NavContent';

import './Header.scss';

export default function Header() {
    return (
        <header className="header">
             <div className="header__top">
                 <a className="header__a"href="/"><img src={ Logo } alt="Fizzmod"/></a>
                 <div className="header__top__components">
                    <TopNav />
                    <Search />
                 </div>
             </div>
             <div className="header__menu">
             <Menu/>
             </div>
             <nav className="header__menu-hamburguesa">
                 <input type="checkbox" id="checkbox" className="header__checkbox"/>
                 <label htmlFor="checkbox"><AiOutlineMenu/></label>
                 <NavContent />
            </nav>
        </header>
    )
}
