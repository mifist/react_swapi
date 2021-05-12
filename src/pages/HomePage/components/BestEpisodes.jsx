// services
import {useLoadFilms} from 'services/swapiService';
// componetns
import Spinner from 'components/Spinner';
import ErrorIndicator from 'components/ErrorIndicator';
import SliderCards from 'components/Slider/SliderCards';

const BestEpisodes = () => {
  const {data: films, isLoading, isError, isSuccess} = useLoadFilms();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator />;

  return (
    <>
      <h2 style={{textTransform: 'uppercase'}}>Best Episodes</h2>
      {isSuccess && <SliderCards id='bestEpisodeSlider' items={films} />}
    </>
  );
};

export default BestEpisodes;
