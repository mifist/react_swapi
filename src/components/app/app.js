/* Core */
import React, { Component } from 'react';
/* Style */
import './app.scss';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../starship-details';


export default class App extends Component {

    render() {
        return (
            <div className="main-app">
                <AppHeader title="Star DB" />
                <RandomPlanet />
                <main className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList />
                        </div>
                        <div className="col-md-8">
                            <PersonDetails />
                            <PlanetDetails />
                            <StarshipDetails />
                        </div>
                    </div>
                </main>
                <AppFooter copyright="Created by Mifist" />
            </div> 
        );
    }
}