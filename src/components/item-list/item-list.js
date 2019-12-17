/* Core */
import React, { Component } from 'react';
/* Style */
import './item-list.scss';
/* Services */
import SwapiService from '../../services/swapi-service';
/* Components */
import Spinner from '../spinner';


export default class ItemList extends Component {

    swapiServise = new SwapiService()

    state = { 
        peopleList: null
    }

    componentDidMount() {
        this.swapiServise
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            })
        })
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="person-item"
                    key={id}
                    onClick={ () => this.props.onPersonSelected(id) } >
                    { name }
                </li>
            )
        })
    }

    render() {

        const { peopleList } = this.state

        if(!peopleList) {
            return <Spinner />
        }
        const items = this.renderItems(peopleList)

        return (
            <div className="item-list jumbotron">
                <h3 className="display-5">ItemList</h3>
                <ul>
                    { items }
                </ul>
            </div>
        );
    }
}