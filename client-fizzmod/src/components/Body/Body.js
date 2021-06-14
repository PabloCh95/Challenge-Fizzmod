import React, { useState, useEffect } from 'react'
import Products from './Products';
import BannerSlider from './BannerSlider/BannerSlider'
import { getBodyApi } from '../../api/body';


export default function Body() {
    const [ slides , setSlides ] = useState([]);
    const [ products , setProducts ] = useState([]);
    const [ filters , setFilters ] = useState([]);
    
    useEffect(() => {
        getBodyApi().then( result => {
            const arrayProducts = [];
            const arrayFilters = [];
            result.products.forEach( item => {
                if(item){
                    arrayProducts.push(item);
                }
            });
            result.filters.forEach( item => {
                if(item){
                    arrayFilters.push(item);
                }
            })
            setSlides(result.slides);
            setProducts(arrayProducts);
            setFilters(arrayFilters);
        })
    }, [])
    

    return (
        <div>{console.log(products, filters )}
            <BannerSlider slides={slides}/>
            <Products products={products} filters={filters} />
        </div>
    )
}
