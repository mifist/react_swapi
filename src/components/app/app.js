/* Core */
import React, { Component } from 'react';
/* Style */
import './app.scss';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';


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
                <AppHeader title="Header" />
                <main>{ this.getApi() }</main>
                <AppFooter copyright="Created by Mifist" />
            </div> 
        );
    }
}