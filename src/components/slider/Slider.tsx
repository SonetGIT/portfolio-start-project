import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Stl } from './Slider_Stl';
import '../../styles/slider.css';

type SlidePrType = {
    text:string
    userName:string
}

const Slide = (props:SlidePrType) => {
    return(
        <Stl.Slide>
            <Stl.Text>{props.text}</Stl.Text>
            <Stl.Name>@{props.userName}</Stl.Name>
        </Stl.Slide>

    )

}
const items = [
    <Slide userName={'ivan ivanow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'ptr ptr'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'igor igorow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>      
];

export const Slider = () => (
    <Stl.Slider>
        <AliceCarousel
            mouseTracking
            items={items}        
        />
    </Stl.Slider>
);

