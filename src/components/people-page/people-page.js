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
import ItemListDetails, {Entry} from '../item-list-details'


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItemList: 5
    }

    onItemListSelected = (id) => {
        this.setState({
            selectedItemList: id
        })
    }

    render() {
        const { selectedItemList } = this.state;
        const { getAllPeople, getPerson, getPersonImage } = this.swapiService

        const itemList = (
            <ItemList 
                onItemSelected={ this.onItemListSelected } 
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
                                    itemId={ selectedItemList } 
                                    getData={ getPerson }
                                    getImageUrl={ getPersonImage }
                                > 
                                    <Entry field="name" label="Name" />
                                    <Entry field="name" label="Name" />
                                    <Entry field="name" label="Name" />
                                </ItemListDetails>
                                
                            } 
                        />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}
