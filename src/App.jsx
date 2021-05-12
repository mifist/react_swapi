import {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
// styles
import 'styles/App.scss';
// components
import FullSpinner from 'components/FullSpinner';
import Header from 'components/Header';
import Footer from 'components/Footer';
// pages
import HomePage from 'pages/HomePage';
// custom image
import sw_logo from 'assets/images/Star_Wars_Yellow_Logo.svg';

const EpisodesPage = lazy(() => import('pages/EpisodesPage'));
const CharactersPage = lazy(() => import('pages/CharactersPage'));
const PlanetsPage = lazy(() => import('pages/PlanetsPage'));
const StarshipsPage = lazy(() => import('pages/StarshipsPage'));

const App = () => {

  return (
    <div id='sw-app'>
      <Suspense fallback={<FullSpinner />}>
        <Header title={`Star Wars`} logo={sw_logo} />
        <main className='main main-raised'>
          <Route exact path='/' component={HomePage} />
          <Route path='/episodes' component={EpisodesPage} />
          <Route path='/characters' component={CharactersPage} />
          <Route path='/planets' component={PlanetsPage} />
          <Route path='/starships' component={StarshipsPage} />
        </main>
        <Footer createdBy='Daria' />
      </Suspense>
    </div>
  );
};

export default App;
