import React from 'react';
import PropTypes from 'prop-types';

// get our fontawesome imports
import { faFilm, faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// cutom icon 
import falcon_white from 'assets/images/sw-falcon-white.svg';
import planet_white from 'assets/images/planet-white.svg';

const Header = ({title, logo, bgImage}) => {
  return (
    <header id='sw-app-header' className='header'>
      <nav
        id='sectionsNav'
        color-on-scroll='100'
        className='navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg'
      >
        <div className='container'>
          <div className='navbar-translate'>
            <span className='navbar-brand' href={'#'}>
              {logo
                ? <img className='logotype' src={logo} alt={title} title={title} />
                : <span href='/' className='logobrang'>{title}</span>
              }
            </span>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='navbar-toggler-icon'></span>
              <span className='navbar-toggler-icon'></span>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              {/* <li className='dropdown nav-item'>
                <span
                  href={'#'}
                  data-toggle='dropdown'
                  className='dropdown-toggle nav-link'
                >
                  <i className='material-icons'>apps</i> Components
                </span>
                <div className='dropdown-menu dropdown-with-icons'>
                  <span href={'#'} className='dropdown-item'>
                    <i className='material-icons'>layers</i> All Components
                  </span>
                  <span href={'#'} className='dropdown-item'>
                    <i className='material-icons'>content_paste</i>
                    Documentation
                  </span>
                </div>
              </li> */}
              <li className='nav-item'>
                <span className='nav-link' href={'#'}>
                  <FontAwesomeIcon icon={faFilm} />
                  Episodes
                </span>
              </li>
              <li className='nav-item'>
                <span className='nav-link' href={'#'}>
                  <FontAwesomeIcon icon={faPersonBooth} />
                  Characters
                </span>
              </li>
              <li className='nav-item'>
                <span className='nav-link' href={'#'}>
                  <img src={planet_white} alt='Planets' />
                  Planets
                </span>
              </li>
              <li className='nav-item'>
                <span className='nav-link' href={'#'}>
                  <img src={falcon_white} alt='Starships' style={{maxWidth: '27px'}} />
                  Starships
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className='page-header'
        data-parallax='true'
        style={bgImage && {backgroundImage: `url(${bgImage})`}}
      ></div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  bgImage: PropTypes.string,
};

export default Header;
