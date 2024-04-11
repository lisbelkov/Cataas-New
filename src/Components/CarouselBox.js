import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getCat } from '../services/cataas';

export default class CarouselBox extends Component {
    imgs = [];

    constructor(props) {
        console.log('!!! carousel constructor');
        super(props);
        this.state = { images: [] };
        this.myRef = React.createRef();

        if (!this.state.images.length) {
            let promises = [];
            for (let i = 0; i < props.size; i++) {
                promises.push(getCat());
            }
            Promise.all(promises)
                .then((data) => { this.setImages(data); });
        }
        // for (let i = 0; i < this.props.size; i++) {
        //     console.log('carousel props size', this.props.size)
        //     getCat().then(result => {
        //         console.log('!!! carousel got cat');
        //         this.imgs.push(result);
        //     });
        // }
    }

    componentDidMount() {
        console.log('!!! carousel componentDidMount');
    }

    setImages(images) {
        const urlCreator = window.URL || window.webkitURL;
        let sources = [];
        for (let i = 0; i < images.length; i++) {
            const imgSrc = urlCreator.createObjectURL(images[i].data);
            sources.push(imgSrc);
        }
        this.setState({ images: sources });
    }

    render() {
        console.log('!!! carousel render');
        if (this.state.images.length) {
            let items = [];
            for (let i = 0; i < this.state.images.length; i++) {
                console.log('!!! carousel render -> ', i);
                const item = <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={this.state.images[i]}
                        alt={'Cat' + i}
                    />
                    <Carousel.Caption>
                        <h2 class="cariusel">Do you like cats?</h2>
                        <h4 class="cariusel">mmm?</h4>
                        <h3 class="cariusel">Want a random cat?<br></br>Click</h3>
                        <a class="cariusel-с" href="../Catbutton">here</a>
                    </Carousel.Caption>
                </Carousel.Item>;
                items.push(item);
            }
            return (
                <Carousel class="img">
                    {items}
                </Carousel>
            )


            /*let block = new HTMLDivElement();
            for (let i = 0; i < this.state.images.length; i++) {
                let img = new HTMLImageElement();
                const urlCreator = window.URL || window.webkitURL;
                img.src = urlCreator.createObjectURL(this.state.images[i]);
                block.appendChild(img);
            }
            this.myRef = block;
            return <div ref={this.myRef} />;*/
        } else {
            return 'Loading...';
        }


        /*
        let items;
        for (let i = 0; i < this.state.images.length; i++) {
            console.log('!!! carousel render -> ', i);
            items +=    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={this.state.images[i]}
                                alt={'Cat' + i}
                            />
                            <Carousel.Caption>
                                <h2>Do you like cats?</h2>
                                <p>mmm?</p>
                            </Carousel.Caption>
                        </Carousel.Item>;
        }
        return (
            <Carousel>
                {items}
            </Carousel>
        )*/
    }
}