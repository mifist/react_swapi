/* Core */
import React from 'react';
/* Style */
import './app-header.scss';

const AppHeader = ( {title} ) => {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href=""><h1>{title}</h1></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link" href="">People</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="">Planets</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="">Starships</span>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            
        </header>
    );
};

export default AppHeader;