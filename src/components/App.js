import React from 'react';
import DisplayCarousel from './DisplayCarousel';
import VideoCarousel from './VideoCarousel';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column">
                    <DisplayCarousel />
                    <VideoCarousel />
                </div>
            </div>
        </div>
    );
}

export default App;