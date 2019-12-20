/* Core */
import React, { Component } from 'react';
/* Style */
import './item-list-details.scss';

/* Components */
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class ItemListDetails extends Component {

    state = { 
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItemList()
    }

    componentDidUpdate( prevProps ) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItemList()
        }
    }

    updateItemList() {
        const { itemId, getData, getImageUrl } = this.props
        
        if( !itemId ) {
            return
        }
        this.setState({ 
            loading: true,
        })
        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image: getImageUrl(item),
                    loading: false,
                })
            })

    }

    render() {
        const { item, image } = this.state;
        if( !item ) {
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
        } = item


        return (
            <div key={id} className="row jumbotron item-list-details">
                <div className="col-lg-6">
                    <div className="preview-image">
                        <img 
                            alt="PersonDetails" 
                            src={ image }  
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