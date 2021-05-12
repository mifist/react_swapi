import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// get our fontawesome imports
import {Heart} from '@styled-icons/icomoon/Heart';

export const HeartIcon = styled(Heart)`
  width: 16px;
  margin: 0 7px;
  color: #FFE81F;
`;

function Footer({createdBy}) {
  return (
    <footer id='sw-app-footer' className='footer footer-default' style={{flexWrap: 'wrap'}}>
      <div
        className='copyright float-right'
        style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}
      >
        &copy; 2021, designed and developed with <HeartIcon /> by {createdBy} for a better web.
      </div>
      <div className='copyright' style={{display: 'block', width: '100%', fontSize: '12px', paddingTop: '35px'}}>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Images were freely collected from{' '}
        <a href='http://starwars.wikia.com/wiki/Main_Page' rel="noreferrer" target='_blank'>Wookiepedia</a>.<br />
        Designed by <a href='https://www.creative-tim.com/product/material-kit' rel="noreferrer" target='_blank'>Material Kit</a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  createdBy: PropTypes.string.isRequired,
};

export default Footer;
