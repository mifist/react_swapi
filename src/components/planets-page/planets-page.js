/* Core */
import React, { Component } from 'react';
/* Style */
import './planets-page.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemList from '../item-list'
import ItemListDetails, { Entry } from '../item-list-details'


export default class PlanetsPage extends Component {

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
        const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService

        const itemList = (
            <ItemList 
                onItemSelected={ this.onItemListSelected  } 
                getData={ getAllPlanets }
            >
                {(i) => (
                    <span>
                        {i.name}
                        <span className="list-details">
                            {i.gravity}
                        </span>
                    </span>
                )}
            </ ItemList>
        )

        const itemDetails = (
            <ItemListDetails 
                itemId={ selectedItemList } 
                getData={ getPlanet }
                getImageUrl={ getPlanetImage }
            > 
                <Entry field="diameter" label="Diameter" />
                <Entry field="rotationPeriod" label="Rotation Period" />
                <Entry field="orbitalPeriod" label="Orbital Period" />
                <Entry field="gravity" label="Gravity" />
                <Entry field="population" label="Population" />
                <Entry field="climate" label="Climate" />
                <Entry field="terrain" label="Terrain" />
                <Entry field="surfaceWater" label="Surface Water" />
            
        
            </ItemListDetails>
        )

        return (
            <div className="planets-page">
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
