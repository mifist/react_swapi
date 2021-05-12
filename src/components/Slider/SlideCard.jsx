import PropTypes from 'prop-types';
// style
import './slideCard.scss';

const SlideCard = ({item, ...rest}) => {

  return (
    item && (
      <div className='slider-card carousel-item' {...rest}>
        {item.thumbnail && (
          <div className='slider-card__image'>
            <img
              src={item.thumbnail}
              alt={item.title}
              className='slick-image d-block w-100'
            />
          </div>
        )}
        <div className='slider-card__caption'>
          <h3>{item.title}</h3>
        </div>
      </div>
    )
  );
};

SlideCard.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default SlideCard;
