import React from 'react';
import PropTypes from 'prop-types';

// get our fontawesome imports
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = ({title, bgImage}) => {
  return (
    <header className='app-header'>
      <nav
        id='sectionsNav'
        color-on-scroll='100'
        className='navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg'
      >
        <div className='container'>
          <div className='navbar-translate'>
            <span className='navbar-brand' href={'#'}>
              {title}
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
              <li className='dropdown nav-item'>
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
              </li>
              <li className='nav-item'>
                <span className='nav-link' href={'#'}>
                  <i className='material-icons'>unarchive</i> Upgrade to PRO
                </span>
              </li>
              <li className='nav-item'>
                <span
                  className='nav-link'
                  data-placement='bottom'
                  href={'#'}
                  data-original-title='Follow us on Twitter'
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </li>
              <li className='nav-item'>
                <span
                  className='nav-link'
                  data-placement='bottom'
                  href={'#'}
                  data-original-title='Like us on Facebook'
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </span>
              </li>
              <li className='nav-item'>
                <span
                  className='nav-link'
                  data-placement='bottom'
                  href={'#'}
                  data-original-title='Follow us on Instagram'
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {bgImage && (
        <div
          className='page-header header-filter'
          data-parallax='true'
          style={{backgroundImage: `url(${bgImage})`}}
        ></div>
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string,
};

export default Header;
