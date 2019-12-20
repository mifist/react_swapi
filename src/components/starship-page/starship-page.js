/* Core */
import React, { Component } from 'react';
/* Style */
import './starship-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import Row from '../row';
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
            <div className="starship-page">
               <div className="container">
                    <Row 
                        left={ itemList } 
                        right={ 
                            <StarshipDetails shipId={ selectedStarship } /> 
                        } 
                    />
                </div>
            </div>
        );
    }
}
