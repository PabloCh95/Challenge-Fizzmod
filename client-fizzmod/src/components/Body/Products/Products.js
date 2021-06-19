import React,{ useState, useEffect } from 'react'
import Filters from './Filters'
import ProductsBox from './ProductsBox/ProductsBox';

import './Products.scss'

export default function Products(props) {
    const { products, filters} = props;
    const [ dataFilters, setDataFilters ] = useState([]);
    const [ dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
       
        let listOfProducts = products.filter(item => {
            if(dataFilters.length > 0){
                let attributes = item.attributes.map(x => x.value);
                
                return attributes.some(x => {
                    return dataFilters.includes(x);
                })
            }

            return true;
        });
       
       setDataProducts(listOfProducts)
    }, [dataFilters, products])

    return (
        <div className="products">
            <div className="products__title-box">
            <p></p><h1 className="products__title">Productos</h1><p></p>
            </div>
            <div className="products__box">
                <Filters filters={filters} filtersSelected={dataFilters} setDataFilters={setDataFilters}/>

                <ProductsBox products={dataProducts}/>
            </div>
        </div>
    )
}
