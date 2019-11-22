/* Core */
import React from 'react';
/* Style */
import './app-header.scss';

const AppHeader = ( {title} ) => {
    return (
        <header className="app-header">
            <h1>{title}</h1>
        </header>
    );
};

export default AppHeader;