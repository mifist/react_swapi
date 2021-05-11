import swapi, {_transformFilm} from './swapi';
import {prop, sortWith, ascend, descend} from 'ramda';
import _find from 'lodash/find';
import {useQuery, useMutation, useQueryClient} from 'react-query';

export const sortFilms = (films) =>
  sortWith([descend(prop('releaseDate')), ascend(prop('title'))], films);

export const defaultMutateOptions = (queryClient) => ({
  onMutate: async (newItem) => {
    const prevItem = queryClient.getQueryData('films');
    if (newItem._id) {
      queryClient.setQueryData(['films', newItem._id], newItem);

      queryClient.setQueryData('films', (old) => {
        return old.map((item) =>
          item._id === newItem._id ? {...item, ...newItem} : item,
        );
      });
    } else {
      const addedItem = {...newItem, _id: 'added'};
      queryClient.setQueryData('films', (old) => [...old, addedItem]);
    }

    return {prevItem};
  },
  onError: (err, newItem, context) => {
    queryClient.setQueryData('films', context.prevItem);
  },
  onSettled: (newItem) => {
    queryClient.invalidateQueries('films');
  },
});

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
