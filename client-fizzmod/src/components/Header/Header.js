import React from 'react'
import Logo from '../../assets/svg/logo_fizzmod.svg'
import Menu from './Menu'
import TopNav from './TopNav'

import './Header.scss';

export default function Header() {
    return (
        <div className="header">
             <div className="header_logo">
                 <img src={ Logo } />
             </div>
             <TopNav />
             <Menu/>
        </div>
    )
}
