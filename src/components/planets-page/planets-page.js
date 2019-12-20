/* Core */
import React, { Component } from 'react';
/* Style */
import './planets-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import Row from '../row';
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

        const itemList = (
            <ItemList 
                onItemSelected={ this.onPersonSelected } 
                getData={ this.swapiService.getAllPeople }
                renderItem={ ({name}) => (
                    <span>
                        {name}
                        <span className="list-details">some</span>
                    </span>
                ) }
            />
        )

        return (
            <div className="planets-page">
               <div className="container">
                    <Row 
                        left={ itemList } 
                        right={ 
                            <PlanetDetails planetId={ selectedPlanet } /> 
                        } 
                    />
                </div>
            </div>
        );
    }
}
