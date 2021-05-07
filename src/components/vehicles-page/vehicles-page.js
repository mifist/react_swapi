/* Core */
import React, { Component } from 'react';
/* Style */
import './vehicles-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemList from '../item-list'
import ItemListDetails, { Entry } from '../item-list-details'


export default class VehiclesPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItemList: 4
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
        const { getAllVehicles, getVehicle, getVehicleImage } = this.swapiService

      

        const itemList = (
            <div className="item-list jumbotron">
                <h3 className="display-5"> Vehicles </h3>
                <ItemList 
                    onItemSelected={ this.onItemListSelected } 
                    getData={ getAllVehicles }
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
            </div>
        )

        const itemDetails = (
            <ItemListDetails 
                itemId={ selectedItemList } 
                getData={ getVehicle }
                getImageUrl={ getVehicleImage }
            > 
                <Entry field="model" label="Model" />
                <Entry field="class" label="Vehicle Class" />
                <Entry field="consumables" label="Consumables" />
                <Entry field="manufacturer" label="Manufacturer" />
                <Entry field="length" label="Length" />
                <Entry field="costInCredits" label="Cost In Credits" />
                <Entry field="crew" label="Crew" />
                <Entry field="passengers" label="Passengers" />
                <Entry field="speed" label="Speed" />
                <Entry field="cargoCapacity" label="Cargo Capacity" />
            
        
            </ItemListDetails>
        )

        return (
            <div className="vehicles-page">
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
