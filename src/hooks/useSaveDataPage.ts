import { useCallback, useEffect, useState } from 'react';
import { MovieList } from '@type/MovieList';
import { sortFilmsByRating } from '@utils/sortFilmsByRating';

export const useSaveDataPage = (films: MovieList) => {
  const [dataAllPage, setDataAllPage] = useState<MovieList | undefined>([]);

  const saveDataPage = useCallback(
    (dataPage: MovieList) => {
      let copy = dataAllPage?.slice();

      dataPage.map((film) => {
        if (copy?.includes(film) === false) {
          copy?.push(film);
        }
      });

      if (copy?.length === 10) {
        copy = sortFilmsByRating(copy);
      }

      if (dataAllPage?.length !== copy?.length) {
        setDataAllPage(copy);
      }
    },
    [dataAllPage]
  );

  useEffect(() => {
    saveDataPage(films);
  }, [films, saveDataPage]);

  return dataAllPage;
};
