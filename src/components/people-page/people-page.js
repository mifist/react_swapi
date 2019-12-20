/* Core */
import React, { Component } from 'react';
/* Style */
import './people-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */



export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = { }

    render() {
    
        return (
            <div className="people-page">
                page
            </div>
        );
    }
}
