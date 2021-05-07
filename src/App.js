import React from 'react';
// styles
import 'styles/App.scss';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
// custom image
import sw_logo from 'assets/images/Star_Wars_Yellow_Logo.svg';
import {LogoYellow} from 'assets/images/cusom-icons';

const App = () => {
  return (
    <div id='sw-app'>
      <Header title={`Star Wars`} logo={sw_logo} />
      <div className='main main-raised'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 ml-auto mr-auto'>
              <LogoYellow />
            </div>
          </div>
        </div>
      </div>
      <Footer createdBy='Daria' />
    </div>
  );
};

export default App;
