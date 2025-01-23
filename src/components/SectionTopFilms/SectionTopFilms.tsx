import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@components/Loader/Loader';
import { FilmsList } from '@components/FilmsList/FilmsList';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getTopMovie } from '@api/getTopMovie';
import { sortFilmsByRating } from '@utils/sortFilmsByRating';
import './SectionTopFilms.css';

export const SectionTopFilms: FC = () => {
  const TopFilmQuery = useQuery({
    queryFn: () => getTopMovie(),
    queryKey: ['top10'],
  });

  switch (TopFilmQuery.status) {
    case 'pending':
      return (
        <section className='top-films'>
          <div className='container top-films__container'>
            <h2 className='top-films__title'>Топ 10 фильмов</h2>

            <div className='top-films__container-status'>
              <Loader />
            </div>
          </div>
        </section>
      );

    case 'success':
      return (
        <section className='top-films'>
          <div className='container top-films__container'>
            <h2 className='top-films__title'>Топ 10 фильмов</h2>

            <FilmsList data={sortFilmsByRating(TopFilmQuery.data)} />
          </div>
        </section>
      );

    case 'error':
      return (
        <section className='top-films'>
          <div className='container top-films__container'>
            <h2 className='top-films__title'>Топ 10 фильмов</h2>

            <div className='top-films__container-status'>
              <span className='top-films__error-text'>
                Упс... Что-то пошло не так...
              </span>

              <ButtonRefetch refetch={TopFilmQuery.refetch} />
            </div>
          </div>
        </section>
      );
  }
};
