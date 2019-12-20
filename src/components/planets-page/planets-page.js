/* Core */
import React, { Component } from 'react';
/* Style */
import './planets-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemList from '../item-list'
import PlanetDetails from '../planet-details';


export default class PlanetsPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPlanet: 5
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        })
    }

    render() {
        const { selectedPlanet } = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={ this.onPersonSelected } 
                getData={ this.swapiService.getAllPeople }
            >
                {(i) => (
                    <span>
                        {i.name}
                        <span className="list-details">
                        some
                        </span>
                    </span>
                )}
            </ ItemList>
        )

        return (
            <div className="planets-page">
               <div className="container">
                   <ErrorBoundry>
                        <Row 
                            left={ itemList } 
                            right={ 
                                <PlanetDetails planetId={ selectedPlanet } /> 
                            } 
                        />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}
