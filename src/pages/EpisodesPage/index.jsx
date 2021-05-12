// services
import {useLoadFilms} from 'services/swapiService';
//componetns
import FullSpinner from 'components/FullSpinner';
import ErrorIndicator from 'components/ErrorIndicator';
import Disclaimer from 'components/Disclaimer';

function EpisodesPage(props) {
  const {data: films, isLoading, isError, isSuccess} = useLoadFilms();
  //const {data: film, isLoading2, isError, isSuccess} = useFetchFilm(1);
  if (isLoading) return <FullSpinner />;
  if (isError) return <ErrorIndicator />;

  const filmsOutput = films.map((film) => <h3 key={film.id}>{film.title}</h3>);

  return (
    isSuccess && (
      <div className='container'>
        <Disclaimer
          title='All Episodes'
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
        <div className='row'>
          <div className='col-md-12 ml-auto mr-auto'>
            <h2>films:</h2>
            {filmsOutput}
          </div>
        </div>
      </div>
    )
  );
}

EpisodesPage.propTypes = {};

export default EpisodesPage;
