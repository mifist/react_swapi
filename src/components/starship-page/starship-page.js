/* Core */
import React, { Component } from 'react';
/* Style */
import './starship-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */



export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = { }

    render() {
    
        return (
            <div className="starship-page">
                page
            </div>
        );
    }
}
