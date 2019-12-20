/* Core */
import React, { Component } from 'react';
/* Style */
import './starship-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemList from '../item-list'
import StarshipDetails from '../starship-details';


export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedStarship: 5
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        })
    }

    render() {
        const { selectedStarship } = this.state;

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
            <div className="starship-page">
               <div className="container">
                    <ErrorBoundry>
                        <Row 
                            left={ itemList } 
                            right={ 
                                <StarshipDetails shipId={ selectedStarship } /> 
                            } 
                        />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}
