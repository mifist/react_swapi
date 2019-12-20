/* Core */
import React, { Component } from 'react';
/* Style */
import './item-list.scss';
/* Components */
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = { 
        itemList: null
    }

    componentDidMount() {
        const { getData }= this.props


        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item
            const label = this.props.children(item)
            return (
                <li className="list-item"
                    key={id}
                    onClick={ () => this.props.onItemSelected(id) } 
                >
                    { label }
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state

        if(!itemList) {
            return <Spinner />
        }
       
        return (
            <div className="item-list jumbotron">
                <h3 className="display-5">ItemList</h3>
                <ul>
                    { this.renderItems(itemList) }
                </ul>
            </div>
        );
    }
}