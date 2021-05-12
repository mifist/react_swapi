import swapi from './swapi';
import {prop, sortWith, ascend, descend} from 'ramda';
//import _find from 'lodash/find';
import {useQuery, useQueryClient} from 'react-query';

// Films
export const sortFilms = (films) =>
  sortWith([descend(prop('releaseDate')), ascend(prop('title'))], films);

export const useLoadFilms = () => {
  const queryClient = useQueryClient();
  return useQuery('films', async () => {
    const films = await swapi.films.fetchAll();
    films.map((film) => queryClient.setQueryData(['films', film.id], film));
    return sortFilms(films);
    //return films;
  });
};

export const useFetchFilm = (id) => {
  return useQuery(['films', id], async () => {
    return await swapi.films.fetchById(id);
  });
};

// People
export const sortPeople = (people) =>
  sortWith([descend(prop('birthYear')), ascend(prop('name'))], people);

export const useLoadPeople = () => {
  const queryClient = useQueryClient();
  return useQuery('people', async () => {
    const people = await swapi.people.fetchAll();
    people.map((person) => queryClient.setQueryData(['people', person.id], person));
    return sortPeople(people);
    //return films;
  });
};

export const useFetchPerson = (id) => {
  return useQuery(['people', id], async () => {
    return await swapi.people.fetchById(id);
  });
};
