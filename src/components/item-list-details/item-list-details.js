/* Core */
import React, { Component } from 'react';
/* Style */
import './item-list-details.scss';

/* Components */
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Entry = ({item, field, label}) => {
     return (
         <li className="entry">
            <span>{label}</span>
            <span>{ field }</span>
         </li>
     )
}
export {
    Entry
}

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

console.log(this.props.children)
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
                        {
                           
                            React.Children.map(  this.props.children, (child, idx) => {
                                console.log(child.props)
                            return <span>{child.props.field}</span>
                            } )
                        }
                        
                    </ul>
                </div>
                <ErrorButton />
            </div>
        );
    }
}