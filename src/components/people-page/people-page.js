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

        const itemList = (
            <ItemList 
                onItemSelected={ this.onPersonSelected } 
                getData={ this.swapiService.getAllPeople }
                renderItem={ ({name, gender, birthYear}) => (
                    <span>
                        {name}
                        <span className="list-details">{ `${gender}, ${birthYear}` }</span>
                    </span>
                ) }
            />
        )

        return (
            <div className="people-page">
                <div className="container">
                    <Row 
                        left={ itemList } 
                        right={ 
                            <PersonDetails personId={ selectedPerson } /> 
                        } 
                    />
                </div>
            </div>
        );
    }
}
