/* Core */
import React, { Component } from 'react';
/* Style */
import './person-details.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import Spinner from '../spinner';


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

        if( !this.state.person ) {
            return <span> Select a person from a list on left. </span>
        }
        
        if ( this.state.loading ) {
            return <Spinner />
        }

        const {
            id, 
            name, 
            gender,
            birth_year,
            eye_color,
            hair_color,
            skin_color,
            height,
            homeworld,
            mass 
        } = this.state.person


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
                        <li>gender: { gender }</li>
                        <li>birth year: { birth_year }</li>
                        <li>eye color: { eye_color }</li>
                        <li>hair color: { hair_color }</li>
                        <li>skin color: { skin_color }</li>
                        <li>height: { height }</li>
                        <li>homeworld: { homeworld }</li>
                        <li>mass: { mass }</li>
                    </ul>
                </div>
                
            </div>
        );
    }
}