/* Core */
import React from 'react';
/* Style */
import './starship-details.scss';

const StarshipDetails = ( {title} ) => {
    return (
        <div className="row starship-details jumbotron">
            <div className="col-lg-6">
                <div className="preview-image">
                    <img alt="StarshipDetails" 
                        src="https://starwars-visualguide.com/assets/img/planets/10.jpg"  />
                </div>
            </div>
            <div className="col-lg-6">
                <h3 className="display-5">StarshipDetails</h3>
                <ul>
                    <li>This is a simple hero unit</li>
                    <li>This is a simple hero unit</li>
                    <li>This is a simple hero unit</li>
                </ul>
            </div>
        </div>
    );
};

export default StarshipDetails;