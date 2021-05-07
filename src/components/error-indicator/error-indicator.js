/* Core */
import React from 'react'
/* Style */
import './error-indicator.scss';
/* Icon */
import icon from './death-star-256.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator alert alert-dismissible alert-danger">
            <img src={icon} alt="BOOM!" />
            <strong className="boom">BOOM!</strong><br />
            <span>Something has gone terribly wrong</span><br />
            <em>(but we already sent droids to fix it)</em>
        </div>
    );
}

export default ErrorIndicator;