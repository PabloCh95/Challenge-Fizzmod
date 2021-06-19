import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5';
import './Search.scss'

export default function Search() {
    return (
        <div className='top-search'>
            <label htmlFor="input-search"><AiOutlineSearch color="#808080" size="2rem" fontWeight="100"   /> </label> <input placeholder="Buscar Producto..." type="text" id="input-search"/>
            <ShoppingCart />
        </div>
    )
}

function ShoppingCart(){
    return (
    <a href="carrito">
        <IoCartOutline color="#ffffff" size="2rem"/>
        <p> MI CARRITO </p> 
    </a>);
}