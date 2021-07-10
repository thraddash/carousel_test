import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css";

class VideoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop showThumbs={false} swipeable={true} useKeyboardArrows dynamicHeight={true} emulateTouch={true}>

                <div className='player-wrapper'>
                    <ReactPlayer
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/castle.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    /><p className="legend2">Castlevania (1986)</p>
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer 
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/axe.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                    <p className="legend2">Golden Axe</p>
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/indy.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                    <p className="legend2">Indy</p>
                </div>
            </Carousel>

        );
    }
};

export default VideoCarousel;