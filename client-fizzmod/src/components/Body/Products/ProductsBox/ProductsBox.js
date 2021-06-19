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
            { (product.price.listPrice !== product.price.sellingPrice) ?   <p className="products-box__desc">-20%</p>: <p> </p>  }
            <img src={ image(product.image) } alt={product.title}/>
            <p className="products-box__title">{ product.title }</p>
            { (product.price.listPrice !== product.price.sellingPrice) ?  <p className="products-box__listPrice"> ${ product.price.listPrice }</p>: <p> </p>  }
            <p className="products-box__sellingPrice"> ${ product.price.sellingPrice }</p>
        </a>
    )

}