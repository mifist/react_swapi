/* Core */
import React from 'react';
/* Style */
import './item-list.scss';

const ItemList = ( {title} ) => {
    return (
        <div className="item-list jumbotron">
            <h3 className="display-5">ItemList</h3>
                <ul>
                    <li>This is a simple hero unit</li>
                    <li>This is a simple hero unit</li>
                    <li>This is a simple hero unit</li>
                </ul>
        </div>
    );
};

export default ItemList;