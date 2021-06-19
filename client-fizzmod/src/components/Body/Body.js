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
            arrayProducts.push(...result.products)
            arrayFilters.push(...result.filters)

            setSlides(result.slides);
            setProducts(arrayProducts);
            setFilters(arrayFilters);
        })
    }, [])
    

    return (
        <div>
            <BannerSlider slides={slides}/>
            {products && <Products products={products} filters={filters} />}
        </div>
    )
}
