/* Core */
import React, { Component } from 'react';
/* Style */
import './planets-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */



export default class PlanetsPage extends Component {

    swapiService = new SwapiService()

    state = { }

    render() {
    
        return (
            <div className="planets-page">
                page
            </div>
        );
    }
}
