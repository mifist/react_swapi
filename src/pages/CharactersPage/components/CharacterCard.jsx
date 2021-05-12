import PropTypes from 'prop-types';
// style
import './characterCard.scss';
const CharacterCard = ({item, style, ...rest}) => {
  console.log({item});
  return (
    <div className='col-md-6'>
      <div
        className='character-card card'
        style={{...style, marginBottom: '15px'}}
        {...rest}
      >
        <div className='card-img-top'>
          <img src={item.thumbnail} rel='nofollow' alt={item.title} />
        </div>

        <div className='card-body'>
          <h4 class='card-title'>{item.title}</h4>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class='btn btn-primary'>See more</span>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default CharacterCard;
