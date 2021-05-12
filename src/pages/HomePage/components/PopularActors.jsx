// services
import {useLoadPeople} from 'services/swapiService';
// componetns
import Spinner from 'components/Spinner';
import ErrorIndicator from 'components/ErrorIndicator';
import SliderCards from 'components/Slider/SliderCards';

const PopularActors = () => {
  const {data: people, isLoading, isError, isSuccess} = useLoadPeople();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator />;

  console.log({people});

  return (
    <>
      <h2 style={{textTransform: 'uppercase'}}>You know them</h2>
      {isSuccess && <SliderCards id='popularActorsSlider' items={people} />}
    </>
  );
};

export default PopularActors;
