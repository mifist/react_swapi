/* Core */
import React from 'react';
/* Style */
import './item-list.scss';
/* Services */
import SwapiService from '../../services/swapi-service'
/* Higher Order Components - HOC */
import { renderWithData } from '../hoc-helpers';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;
  
    const items = data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);
  
      return (
        <li className="list-item list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
  
    return (
      <ul className="list-group">
        {items}
      </ul>
    );
  };
  
  const { getAllPeople } = new SwapiService();
  
  export default renderWithData(ItemList, getAllPeople);
