import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css";

class VideoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop showThumbs={false} swipeable={true} useKeyboardArrows dynamicHeight={true} emulateTouch={true}>

                <div>
                    <ReactPlayer className='player-wrapper'
                        url='/videos/drink.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                    /><p className="legend2">wine 1</p>
                </div>
                <div>
                    <ReactPlayer className='player-wrapper'
                        url='/videos/axe.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                    />
                    <p className="legend2">Golden Axe</p>
                </div>
                <div>
                    <ReactPlayer className='player-wrapper'
                        url='/videos/comic.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                    />
                    <p className="legend2">Captain Comic</p>
                </div>
            </Carousel>

        );
    }
};

export default VideoCarousel;