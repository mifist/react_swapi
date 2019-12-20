/* Core */
import React, { Component } from 'react';
/* Style */
import './people-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemList from '../item-list'
import ItemListDetails from '../item-list-details'



export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 5
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const { selectedPerson } = this.state;
        const { getAllPeople, getPerson, getPersonImage } = this.swapiService

        const itemList = (
            <ItemList 
                onItemSelected={ this.onPersonSelected } 
                getData={ getAllPeople }
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
        )

        return (
            <div className="people-page">
                <div className="container">
                    <ErrorBoundry>
                        <Row 
                            left={ itemList } 
                            right={ 
                                <ItemListDetails 
                                    itemId={ selectedPerson } 
                                    getData={ getPerson }
                                    getImageUrl={ getPersonImage }
                                /> 
                            } 
                        />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}
