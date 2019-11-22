/* Core */
import React, { Component } from 'react';
/* Style */
import './random-planet.scss';
/* Services */
import SwapiService from '../../services/swapi-service';


export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = { 
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25+2);
        this.swapiService
        .getPlanet(id)
        .then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state

        return (
            <div className="random-planet jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="preview-image">
                                <img  alt={name} 
                                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-5">{name}</h3>
                            <ul>
                                <li>
                                    <span className="term">Population</span>
                                    <span>{ population }</span>
                                </li>
                                <li>
                                    <span className="term">Rotation period</span>
                                    <span>{ rotationPeriod }</span>
                                </li>
                                <li>
                                    <span className="term">Diameter</span>
                                    <span>{ diameter }</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}