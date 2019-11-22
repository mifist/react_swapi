/* Core */
import React from 'react';
/* Style */
import './random-planet.scss';

const RandomPlanet = ( {title} ) => {
    return (
        <div className="random-planet jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="" alt="empty" />
                    </div>
                    <div className="col-lg-8">
                        <h3 className="display-5">RandomPlanet</h3>
                        <ul>
                            <li>This is a simple hero unit</li>
                            <li>This is a simple hero unit</li>
                            <li>This is a simple hero unit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomPlanet;