// services
import {useLoadPeople} from 'services/swapiService';
// componetns
import Spinner from 'components/Spinner';
import ErrorIndicator from 'components/ErrorIndicator';
import CharacterCard from './CharacterCard';

const CharactersList = () => {
  const {data: people, isLoading, isError, isSuccess} = useLoadPeople();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator />;

  console.log(people);
  const itemsCards =
    isSuccess &&
    people.map((person) => <CharacterCard key={person.id} item={person} />);

  return <div className='characters-list row'>{itemsCards}</div>;
};

export default CharactersList;
