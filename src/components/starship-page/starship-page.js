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
import ItemListDetails, { Entry } from '../item-list-details'


export default class StarshipPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItemList: 5
    }

    onItemListSelected = (id) => {
        this.setState({
            selectedItemList: id
        })
        
    }

    numberFormat = (value) => {
        return new Intl.NumberFormat('ru').format(value);
    }

    render() {
        const { selectedItemList } = this.state;
        const { getAllStarships, getStarship, getStarshipImage } = this.swapiService

      

        const itemList = (
            <ItemList 
                listTitle="Starships"
                onItemSelected={ this.onItemListSelected } 
                getData={ getAllStarships }
            >
                {(i) => (
                    <span>
                        {i.name}
                        <span className="list-details">
                            { `crew: ${ i.crew }` }
                        </span>
                    </span>
                )}
            </ ItemList>
        )

        const itemDetails = (
            <ItemListDetails 
                itemId={ selectedItemList } 
                getData={ getStarship }
                getImageUrl={ getStarshipImage }
            > 
                <Entry field="model" label="Model" />
                <Entry field="class" label="Starship Class" />
                <Entry field="consumables" label="Consumables" />
                <Entry field="manufacturer" label="Manufacturer" />
                <Entry field="length" label="Length" />
                <Entry field="costInCredits" label="Cost In Credits" />
                <Entry field="crew" label="Crew" />
                <Entry field="passengers" label="Passengers" />
                <Entry field="speed" label="Speed" />
                <Entry field="cargoCapacity" label="Cargo Capacity" />
                <Entry field="hyperdriveRating" label="Hyperdrive Rating" />
                <Entry field="mglt" label="MGLT" />
            
        
            </ItemListDetails>
        )

        return (
            <div className="starship-page">
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
