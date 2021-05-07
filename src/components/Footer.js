import React from 'react';
import PropTypes from 'prop-types';
// get our fontawesome imports
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer({createdBy}) {
  return (
    <footer className='app-footer footer footer-default'>
      <div className='container'>
        <div class='copyright float-right'>
          &copy; 2021, made with <FontAwesomeIcon icon={faHeart} /> by
          {createdBy} for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  createdBy: PropTypes.string.isRequired,
};

export default Footer;