/* Core */
import React, { Component } from 'react';
/* Style */
import './people-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ItemList from '../item-list'
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 5,
        hasError: false // true
    }

    componentDidCatch(error, info) {
        console.log('PeoplePage - componentDidCatch()')
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        if( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const { selectedPerson } = this.state;

        return (
            <div className="people-page">
                <div className="container">
                    <Row 
                        left={ 
                            <ItemList 
                                onItemSelected={ this.onPersonSelected } 
                                getData={ this.swapiService.getAllPeople }
                            >
                                {(i) => (
                                    <span>
                                        {i.name}
                                        <span className="list-details">
                                            { `${i.gender}, ${i.birthYear}` }
                                        </span>
                                    </span>
                                )}
                            </ ItemList>
                        } 
                        right={ 
                            <PersonDetails personId={ selectedPerson } /> 
                        } 
                    />
                </div>
            </div>
        );
    }
}
