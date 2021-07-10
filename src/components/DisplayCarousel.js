import React, { Component } from 'react';
import "./carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DisplayCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop useKeyboardArrows dynamicHeight={true} emulateTouch={true}>
                <div>
                    <img src="images/1.png" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/2.png" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/3.png" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/4.png" alt="" />
                    <p className="legend">Legend 4</p>

                </div>
                <div>
                    <img src="images/5.png" alt="" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="images/6.png" alt="" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="images/7.png" alt="" />
                    <p className="legend">Legend 7</p>
                </div>
                <div>
                    <img src="images/8.png" alt="" />
                    <p className="legend">Legend 8</p>
                </div>
                <div>
                    <img src="images/9.png" alt="" />
                    <p className="legend">Legend 9</p>
                </div>
                <div>
                    <img src="images/10.png" alt="" />
                    <p className="legend">Legend 10</p>
                </div>
            </Carousel>
        );
    }
};

export default DisplayCarousel;