/* Core */
import React, { Component } from 'react'
/* Style */
import './people-page.scss'
/* Services */
import SwapiService from '../../services/swapi-service'
/* Components */
import ErrorBoundry from '../error-boundry'
import Row from '../row'
import ItemList from '../item-list'
import ItemListDetails, { Entry } from '../item-list-details'


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

        const itemDetails = (
            <ItemListDetails 
                itemId={ selectedItemList } 
                getData={ getPerson }
                getImageUrl={ getPersonImage }
            > 
                <Entry field="gender" label="Gender" />
                <Entry field="birthYear" label="Eye Color" />
                <Entry field="eyeColor" label="Eye Color" />
                <Entry field="hairColor" label="Hair Color" />
                <Entry field="skinColor" label="Skin Color" />
                <Entry field="height" label="Height" />
                <Entry field="homeworld" label="Homeworld" />
                <Entry field="mass" label="Mass" />
        
            </ItemListDetails>
        )

        return (
            <div className="people-page">
                <div className="container">
                    <ErrorBoundry>
                        <Row 
                            left={ itemList } 
                            right={ itemDetails } 
                        />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}
