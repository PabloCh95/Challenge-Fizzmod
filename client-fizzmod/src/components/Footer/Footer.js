import React from 'react'

import SocialLinks from './SocialLinks'

import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <h3>PRODUCTOS</h3>
                <li>
                    <a href="#">Compre Junto</a>
                </li>
                <li>
                    <a href="#">Kit Look</a>
                </li>
                <li>
                    <a href="#">Completa tu compra</a>
                </li>
                <li>
                    <a href="#">Shop the look</a>
                </li>
                <li>
                    <a href="#">Sin Stock</a>
                </li>
            </div>
            <div>
                <h3>MI CUENTA</h3>
                <li>
                    <a href="#">Mis pedidos</a>
                </li>
                <li>
                    <a href="#">Wishlist</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Mis listas</a>
                </li>
                <li>
                    <a href="#">Mis recetas</a>
                </li>
            </div>
            <div>
                <h3>CONTACTANOS</h3>
                <li>
                    <a href="#">Nuestras Sucursales</a>
                </li>
                <li>
                    <a href="#">Horarios y Telefonos</a>
                </li>
            </div>
            <SocialLinks />
        </div>
    )
}
