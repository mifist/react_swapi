/* Core */
import React, { Component } from 'react';
/* Style */
import './person-details.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {

    swapiServise = new SwapiService()

    state = { 
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate( prevProps ) {
        if(this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        const { personId } = this.props
        
        if( !personId ) {
            return
        }
        this.setState({ 
            loading: true,
        })
        this.swapiServise
            .getPerson(personId)
            .then((person) => {
                this.setState({ 
                    person,
                    loading: false,
                })
            })

    }

    render() {
        const { person } = this.state;
        if( !person ) {
            return <span> Select a person from a list on left. </span>
        }
        
        if ( this.state.loading ) {
            return <Spinner />
        }

        const {
            id, 
            name, 
            gender,
            birthYear,
            eyeColor,
            hairColor,
            skinColor,
            height,
            homeworld,
            mass 
        } = person


        return (
            <div className="row person-details jumbotron">
                <div className="col-lg-6">
                    <div className="preview-image">
                        <img 
                            alt="PersonDetails" 
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="display-5">{ name }</h3>
                    <ul>
                        <li>Gender : { gender }</li>
                        <li>Birth year : { birthYear }</li>
                        <li>Eye color : { eyeColor }</li>
                        <li>Hair color : { hairColor }</li>
                        <li>Skin color : { skinColor }</li>
                        <li>Height : { height }</li>
                        <li>Homeworld : { homeworld }</li>
                        <li>Mass : { mass }</li>
                    </ul>
                </div>
                <ErrorButton />
            </div>
        );
    }
}