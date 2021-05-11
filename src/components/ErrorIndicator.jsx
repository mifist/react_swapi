import React from 'react';
import {DeathStarBlue} from 'assets/images/cusom-icons';

const indicatorStyle = {
  background: 'transparent',
  textAlign: 'center',
  fontSize: '1rem',
  color: '#ee5f5b',
};

const boomStyle = {
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#ee5f5b',
  display: 'block',
};

const iconStyle = {
  maxWidth: '150px',
  display: 'block',
  margin: '0 auto',
  marginBottom: '30px',
};

const ErrorIndicator = () => {
  return (
    <div
      style={indicatorStyle}
      className='error-indicator alert alert-dismissible alert-danger'
    >
      <DeathStarBlue style={iconStyle} />
      <strong style={boomStyle} className='boom'>
        BOOM!
      </strong>
      <br />
      <span>Something has gone terribly wrong</span>
      <br />
      <em>(but we already sent droids to fix it)</em>
    </div>
  );
};

export default ErrorIndicator;
