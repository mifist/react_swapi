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

    gerResorse = async (url, headers) => {
        const res = await fetch(url, headers)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    } 
    getApi() {
        const url ='https://swapi.co/api/people/1/';
        this.gerResorse(url)
        .then((body) => {
            console.log({body})
        })
        .catch((err) => {
            console.error('Could not fetch', err)
        })
    }

    render() {
        return (
            <div className="main-app">
                <AppHeader title="Star DB" />
                <RandomPlanet />
                <main className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ItemList />
                        </div>
                        <div className="col-md-6">
                            <div>{ this.getApi() }</div>
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