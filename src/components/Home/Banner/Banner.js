import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height={600}
                    className="d-block w-100"
                    src="https://i.ibb.co/J7m8KPz/maxresdefault.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='iphone'>
                        <h3 className='ip-color'> IPhone 13 Pro Max</h3>
                        <h5 className='ip-color'  >It has gotten a new sensor and a lens with 3x zoom. As a result, you'll be pleasantly surprised by the consistency when switching between different cameras</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600}
                    className="d-block w-100"
                    src="https://i.ibb.co/GFqsXW6/thebridgechronicle-2021-04-3d88b7fd-7b24-481b-a154-9bf59182da3f-Picture1.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='oneplus'>
                        <h3 className='one-color'>OnePlus 9R</h3>
                        <h5 className='one-color'>The OnePlus 9R is built for casual and hardcore gamers alike. Powered by the new Qualcomm® Snapdragon™ 870, game-changing 5G connectivity and an enhanced cooling system, every frame is fast, smooth and beautiful</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600}
                    className="d-block w-100"
                    src="https://i.ibb.co/3pqvvM5/galaxy-s22-series-1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className='samsung'>
                        <h3 className='font-color'>Samsung Galaxy S22 Ultra</h3>
                        <h5 className='font-color'>
                            The <span className='different-color' >Samsung Galaxy S22 Ultra</span> features a 108MP main camera with OIS along with a 10MP periscope telephoto camera with OIS and 10x optical zoom, another 10MP telephoto sensor with OIS and 3x optical zoom.
                        </h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;