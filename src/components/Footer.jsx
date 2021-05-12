import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// get our fontawesome imports
import {Heart} from '@styled-icons/icomoon/Heart';

export const HeartIcon = styled(Heart)`
  width: 16px;
  margin: 0 7px;
`;

function Footer({createdBy}) {
  return (
    <footer id='sw-app-footer' className='footer footer-default'>
      <div
        className='copyright float-right'
        style={{display: 'flex', alignItems: 'center'}}
      >
        &copy; 2021, made with <HeartIcon /> by {createdBy} for a better web.
      </div>
    </footer>
  );
}

Footer.propTypes = {
  createdBy: PropTypes.string.isRequired,
};

export default Footer;
