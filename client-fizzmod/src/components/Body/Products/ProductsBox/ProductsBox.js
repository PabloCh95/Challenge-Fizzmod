import React from 'react'
import image from '../../../Images/image'

import './ProductsBox.scss'

export default function ProductsBox({products}) {
    return (
        <div className="products-box">
           {
               products.map( item => {
                    return <CardProducts product={item}/>
               })
           }
        </div>
    )
}

function CardProducts({product}){

    return(
        <a href={product.href} key={product._id}>
            <img src={ image(product.image) }/>
            <p>{ product.title }</p>
            <p>{ product.price.listPrice }</p>
            <p>{ product.price.sellingPrice }</p>
        </a>
    )

}