import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import SingleImage from '../Components/SingleImage';
// import './App.css';

export default class Cataas extends Component {
    render() {
        const item = <SingleImage tag='orange' />;
        const items = [];
        for (let i = 0; i < 15; i++) {
            items.push(item);
        }
        return (
            <div class='image-grid'>
                {items}
                                               
            </div >
           
        )
    }
} 



