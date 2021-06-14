import React,{ useState, useEffect } from 'react'
import Filters from './Filters'
import ProductsBox from './ProductsBox/ProductsBox';

import './Products.scss'

export default function Products(props) {
    const { products, filters} = props;
    const [ dataFilters, setDataFilters ] = useState([]);
    const [ dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
       const arrayProducts = products.filter((item)=>{
           function validation(element,index, array){
               return element.value===dataFilters;
           }
           return item.attributes.some(validation);
       })
       console.log("data filters:",dataFilters)
       console.log("Array productos: ",arrayProducts)
       setDataProducts(arrayProducts)
    }, [dataFilters])

    return (
        <div className="products">
            <h1 className="products__title">Productos</h1>
            <div className="products__box">
                <Filters filters={filters} setDataFilters={setDataFilters}/>
                <ProductsBox products={ products}/>
            </div>
        </div>
    )
}
