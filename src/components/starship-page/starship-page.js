/* Core */
import React, { Component } from 'react';
/* Style */
import './starship-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list'
import StarshipDetails from '../starship-details';


export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedStarship: 5,
        hasError: false // true
    }

    componentDidCatch(error, info) {
        console.log('PeoplePage - componentDidCatch()')
        this.setState({ hasError: true })
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        })
    }

    render() {

        if( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const { selectedStarship } = this.state;

        return (
            <div className="starship-page">
               <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList 
                                onItemSelected={ this.onStarshipSelected } 
                                getData={ this.swapiService.getAllStarships }
                                renderItem={ (item) => item.name }
                            />
                        </div>
                        <div className="col-md-8">
                            <StarshipDetails shipId={ selectedStarship } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
