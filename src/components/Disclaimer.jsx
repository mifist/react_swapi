import React from 'react';
import PropTypes from 'prop-types';

const disclaimerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '940px',
  margin: '0 auto',
  padding: '20px 0',
  textAlign: 'center',
};

const disclaimerTitle = {
  marginBottom: '20px',
};

const Disclaimer = ({title, content}) => {
  return title || content ? (
    <div className='disclaimer-container row'>
      <div className='col-md-12 ml-auto mr-auto'>
        <div style={disclaimerStyle} className='disclaimer'>
          {title && <h1 style={disclaimerTitle}>{title}</h1>}
          {content && <p>{content}</p>}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

Disclaimer.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Disclaimer;
