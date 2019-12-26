/* Core */
import React, { Component } from 'react';
/* Style */
import './app.scss';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
//---------
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipPage from '../starship-page';
import VehiclesPage from '../vehicles-page';


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false // true
    }

    componentDidCatch(error, info) {
        console.log('App - componentDidCatch()')
        this.setState({ hasError: true })
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    render() {

        if( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const { showRandomPlanet } = this.state;

        return (
            <div className="main-app">
                <AppHeader title="Star DB" />
                { showRandomPlanet && <RandomPlanet/> }
                <div className="container simple-button-container">
                    <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet 
                    </button>
                    <ErrorButton />
                </div>
                <main className="main-body">
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipPage />
                    <VehiclesPage />
                </main>
                <AppFooter copyright="Created by Mifist" />
            </div> 
        );
    }
}