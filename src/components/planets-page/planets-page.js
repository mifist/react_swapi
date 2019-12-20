/* Core */
import React, { Component } from 'react';
/* Style */
import './planets-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list'
import PlanetDetails from '../planet-details';


export default class PlanetsPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPlanet: 5,
        hasError: false // true
    }

    componentDidCatch(error, info) {
        console.log('PeoplePage - componentDidCatch()')
        this.setState({ hasError: true })
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        })
    }

    render() {

        if( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const { selectedPlanet } = this.state;

        return (
            <div className="planets-page">
               <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList 
                                onItemSelected={ this.onPlanetSelected } 
                                getData={ this.swapiService.getAllPlanets }
                                renderItem={ (item) => (
                                <span>{ item.name } (--)</span>
                                ) }
                            />
                        </div>
                        <div className="col-md-8">
                            <PlanetDetails planetId={ selectedPlanet } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
