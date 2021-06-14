import React from 'react'
import Carousel from 'react-material-ui-carousel'
import image from '../../Images/image'

import './BannerSlider.scss'

export default function BannerSlider({slides}) {


    return (
        <Carousel
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                style: {
                    color:"#ffffff",
                    border:0,
                }
            }}
        >
           { slides.map( item =>{
               return(<a href={item.href}><img src={image(item.imgName)}/></a>)
            })}
        </Carousel>
    )
}
