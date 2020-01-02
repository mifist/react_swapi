/* Core */
import React, { Component } from 'react';
/* Style */
import './item-list.scss';
/* Components */
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = { 
        itemList: null,
        isActive: false,
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

    toggleClass = (e, id) => {
        console.log('значение this:', this);
        console.log(e.target)
        console.log(e)
        this.setState((state) => {
           return {
                isActive: !state.isActive
           }
        });
    };

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item
            const { isActive } = this.state
            const label = this.props.children(item)
            

            return (
                <li 
                    className={ `list-item list-group-item list-group-item-action ${ isActive && 'active' }` }
                    key={id}
                    onClick={ 
                        (e) => {
                            this.props.onItemSelected(id)
                            this.toggleClass(e,id)
                        } 
                    } 
                >
                    { label }
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state
        const { listTitle } = this.props

        if(!itemList) {
            return <Spinner />
        }
       
        return (
            <div className="item-list jumbotron">
                { listTitle ? <h3 className="display-5">{ listTitle }</h3> : '' } 
                <ul className="list-group">
                    { this.renderItems(itemList) }
                </ul>
            </div>
        );
    }
}