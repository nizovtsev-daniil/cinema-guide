import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@components/Loader/Loader';
import { GenresList } from '@components/GenresList/GenresList';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getGenresList } from '@api/getGenresList';
import './SectionGenresList.css';

export const SectionGenresList: FC = () => {
  const GenresListQuery = useQuery({
    queryFn: () => getGenresList(),
    queryKey: ['genresList'],
  });

  switch (GenresListQuery.status) {
    case 'pending':
      return (
        <section className='genres-list'>
          <div className='container genres-list__container-status'>
            <h2 className='genres-list__title'>Жанры фильмов</h2>

            <div className='genres-list__container-loader'>
              <Loader />
            </div>
          </div>
        </section>
      );

    case 'success':
      return (
        <section className='genres-list'>
          <div className='container genres-list__container'>
            <h2 className='genres-list__title'>Жанры фильмов</h2>

            <GenresList list={GenresListQuery.data} />
          </div>
        </section>
      );

    case 'error':
      return (
        <section className='genres-list'>
          <div className='container genres-list__container-status'>
            <h2 className='genres-list__title'>Жанры фильмов</h2>

            <div className='genres-list__container-loader'>
              <span className='genres-list__error-text'>
                Упс... Что-то пошло не так...
              </span>

              <ButtonRefetch refetch={GenresListQuery.refetch} />
            </div>
          </div>
        </section>
      );
  }
};
