import React from 'react'

import SocialLinks from './SocialLinks'

import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <h3>PRODUCTOS</h3>
            <ul>
                <li>
                    <a href="https://fizzmod.com/">Compre Junto</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Kit Look</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Completa tu compra</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Shop the look</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Sin Stock</a>
                </li>
            </ul>
            </div>
            <div>
                <h3>MI CUENTA</h3>
            <ul>
                <li>
                    <a href="https://fizzmod.com/">Mis pedidos</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Wishlist</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Productos</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Mis listas</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Mis recetas</a>
                </li>
            </ul>
            </div>
            <div>
                <h3>CONTACTANOS</h3>
            <ul>
                <li>
                    <a href="https://fizzmod.com/">Nuestras Sucursales</a>
                </li>
                <li>
                    <a href="https://fizzmod.com/">Horarios y Telefonos</a>
                </li>
            </ul>
            </div>
            <SocialLinks />
        </footer>
    )
}
