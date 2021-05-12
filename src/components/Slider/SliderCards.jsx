import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
// style
import './sliderCards.scss';
// componetns
import SlideCard from './SlideCard';

function SliderCards({items, ...rest}) {

  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const itemsCards = items.map((film) => (
    <SlideCard key={film.id} item={film} />
  ));
  return (
    <div className='carousel' {...rest}>
      <Carousel {...sliderSettings}>{itemsCards}</Carousel>
    </div>
  );
}

SliderCards.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default SliderCards;
