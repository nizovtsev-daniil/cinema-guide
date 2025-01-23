import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Loader } from '@components/Loader/Loader';
import { FilmsListSavePage } from '@components/FilmsListSavePage/FilmsListSavePage';
import { ButtonShowMore } from '@components/ButtonShowMore/ButtonShowMore';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getMoviesByGenre } from '@api/getMoviesByGenre';
import { changeUpperFirstChar } from '@utils/changeUpperFirstChar';
import IconArrow from '@svg/icon-arrow-left.svg?react';
import './SectionFilmsByGenre.css';

export const SectionFilmsByGenre = () => {
  const { genreName } = useParams();

  const [pageCurrent, setPageCurrent] = useState(0);

  const FilmsByGenreQuery = useQuery({
    queryFn: () => getMoviesByGenre(genreName, pageCurrent),
    queryKey: ['genreName', genreName, pageCurrent],
    placeholderData: keepPreviousData,
  });

  switch (FilmsByGenreQuery.status) {
    case 'pending':
      return (
        <section className='films-by-genre'>
          <div className='container films-by-genre__container-status'>
            <Link
              to={'/genres'}
              className='link-reset films-by-genre__link-title'
            >
              <IconArrow className='films-by-genre__icon-link' />
              <h2 className='films-by-genre__title'>
                {changeUpperFirstChar(genreName)}
              </h2>
            </Link>

            <div className='films-by-genre__container-loader'>
              <Loader />
            </div>
          </div>
        </section>
      );

    case 'success':
      return (
        <section className='films-by-genre'>
          <div className='container films-by-genre__container'>
            <Link
              to={'/genres'}
              className='link-reset films-by-genre__link-title'
            >
              <IconArrow className='films-by-genre__icon-link' />
              <h2 className='films-by-genre__title'>
                {changeUpperFirstChar(genreName)}
              </h2>
            </Link>
            <FilmsListSavePage films={FilmsByGenreQuery.data} />
            <ButtonShowMore
              onClick={() => {
                setPageCurrent((pageCurrent) => pageCurrent + 1);
              }}
              isDisabled={FilmsByGenreQuery.data.length > 9}
            />
          </div>
        </section>
      );

    case 'error':
      return (
        <section className='films-by-genre'>
          <div className='container films-by-genre__container-status'>
            <Link
              to={'/genres'}
              className='link-reset films-by-genre__link-title'
            >
              <IconArrow className='films-by-genre__icon-link' />
              <h2 className='films-by-genre__title'>
                {changeUpperFirstChar(genreName)}
              </h2>
            </Link>

            <div className='films-by-genre__container-loader'>
              <span className='films-by-genre__error-text'>
                Упс... Что-то пошло не так...
              </span>

              <ButtonRefetch refetch={FilmsByGenreQuery.refetch} />
            </div>
          </div>
        </section>
      );
  }
};
