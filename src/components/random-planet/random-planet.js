/* Core */
import React, { Component } from 'react';
/* Style */
import './random-planet.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = { 
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        console.log('update')
        const id = Math.floor(Math.random()*17) + 2;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state
        const  hasData = !(loading || error)

        return (
            <div className="random-planet jumbotron">
                <div className="container">
                    <div className="row">
                        { error && <ErrorIndicator /> }
                        { loading && <Spinner /> }
                        { hasData && <PlanetView planet={ planet } /> }
                    </div>
                </div>
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const numberFormat = (value) => {
        return new Intl.NumberFormat('ru').format(value);
    }
    const { id, name, population, rotationPeriod, diameter, climate,
            gravity, terrain, surfaceWater, orbitalPeriod} = planet
    return (
        <React.Fragment>
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
                            <span>{  numberFormat(population) }</span>
                        </li>
                        <li>
                            <span className="term">Rotation period</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li>
                            <span className="term">Orbital period</span>
                            <span>{ orbitalPeriod }</span>
                        </li>
                        <li>
                            <span className="term">Diameter</span>
                            <span>{ `${numberFormat(diameter)} км` }</span>
                        </li> 
                        <li>
                            <span className="term">Climate</span>
                            <span>{ climate }</span>
                        </li>
                        <li>
                            <span className="term">Gravity</span>
                            <span>{ gravity } g</span>
                        </li>
                        <li>
                            <span className="term">Terrain</span>
                            <span>{ terrain } g</span>
                        </li>
                        <li>
                            <span className="term">Surface Water</span>
                            <span>{ surfaceWater } g</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    );
}
