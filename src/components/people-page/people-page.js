/* Core */
import React, { Component } from 'react';
/* Style */
import './people-page.scss';
/* Services */
//import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list'
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

    //swapiService = new SwapiService()

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
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList onPersonSelected={ this.onPersonSelected } />
                        </div>
                        <div className="col-md-8">
                            <PersonDetails personId={ selectedPerson } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
