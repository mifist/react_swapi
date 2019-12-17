/* Core */
import React, { Component } from 'react';
/* Style */
import './app.scss';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 5,
        hasError: false // true
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch()')
        this.setState({ hasError: true })
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
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

        const { showRandomPlanet, selectedPerson } = this.state;
        const planet = showRandomPlanet ? <RandomPlanet/> : null

        return (
            <div className="main-app">
                <AppHeader title="Star DB" />
                { planet }
                <div className="container simple-button-container">
                    <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet 
                    </button>
                </div>
                <main className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList onPersonSelected={ this.onPersonSelected } />
                        </div>
                        <div className="col-md-8">
                            <PersonDetails personId={ selectedPerson } />
                        </div>
                    </div>
                </main>
                <AppFooter copyright="Created by Mifist" />
            </div> 
        );
    }
}