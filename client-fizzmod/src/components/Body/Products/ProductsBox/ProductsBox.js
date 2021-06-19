import React from 'react'
import image from '../../../Images/image'

import './ProductsBox.scss'

export default function ProductsBox({products}) {
    return (
        <div className="products-box">
           {
               products.map( (item,index) => {
                    return <CardProducts key={index} product={item}/>
               })
           }
        </div>
    )
}

function CardProducts({product}){

    return(
        <a href={product.href}>
            <img src={ image(product.image) } alt={product.title}/>
            <p>{ product.title }</p>
            <p>{ product.price.listPrice }</p>
            <p>{ product.price.sellingPrice }</p>
        </a>
    )

}