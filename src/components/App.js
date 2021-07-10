import React from 'react';
import DisplayCarousel from './DisplayCarousel';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column">
                    <DisplayCarousel />
                </div>
            </div>
        </div>
    );
}

export default App;