import React, { Component } from 'react';
import { getCatByTag } from '../services/cataas';
import './styles/SingleImage.css';

export default class SingleImage extends Component {
    constructor(props) {
        super(props);
        this.state = { src: '' };

        getCatByTag(this.props.tag).then(result => {
            this.setImage(result);
        });
    };

    setImage(image) {
        const urlCreator = window.URL || window.webkitURL;
        const imgSrc = urlCreator.createObjectURL(image.data);
        this.setState({ src: imgSrc });
    }

    render() {
        if (this.state.src) {
            return <div class='single-image'>
                <div class='img-helper'></div>
                <img src={this.state.src} alt={this.props.tag || 'Kitty'} />                
            </div>
        } else {
            return <div class='single-image'>
                <div class='img-helper'></div>
                loading...
            </div>
        }
    }
}