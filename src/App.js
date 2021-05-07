import React from 'react';
// styles
import 'styles/App.scss';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
// custom image
import sw_logo from 'assets/images/Star_Wars_Yellow_Logo.svg';

const App = () => {
  return (
    <div id='sw-app'>
      <Header title={`Star Wars`} logo={sw_logo} />
      <div className='main main-raised'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 ml-auto mr-auto'>
              <p>
                An artist of considerable range, Chet Faker &#x2014; the name
                taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014;
                writes, performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer createdBy='Daria' />
    </div>
  );
};

export default App;
