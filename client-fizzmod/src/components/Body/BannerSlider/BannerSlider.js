import React from 'react'
import Carousel from 'react-material-ui-carousel'
import image from '../../Images/image'

import './BannerSlider.scss'

export default function BannerSlider({slides}) {


    return (
        <Carousel
            className="carousel"
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                style: {
                    backgroundColor:"rgb(0,0,0,0)",
                    color:"#ffffff",
                    border:0,
                }
            }}
        >
           { slides.map( item =>{
               return(<a className="carousel__a" key={item.imgName} href={item.href}><img src={image(item.imgName)} alt={item.imgName}/></a>)

            })}
        </Carousel>
    )
}
