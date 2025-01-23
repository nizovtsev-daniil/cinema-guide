import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@components/Loader/Loader';
import { FavoritesFilmsList } from '@components/FavoritesFilmsList/FavoritesFilmsList';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getFavorites } from '@api/getFavorites';
import './FavoritesTab.css';

export const FavoritesTab: FC = () => {
  const FavoritesQuery = useQuery({
    queryFn: () => getFavorites(),
    queryKey: ['favorites'],
  });

  switch (FavoritesQuery.status) {
    case 'pending':
      return (
        <div className='account__container-status'>
          <Loader />
        </div>
      );

    case 'success':
      if (FavoritesQuery.data.length !== 0) {
        return <FavoritesFilmsList data={FavoritesQuery.data} />;
      } else {
        return (
          <div className='account__wrap-error'>
            <p className='account__error-text'>
              Список пуст. Добавьте фильм в избранное.
            </p>
          </div>
        );
      }

    case 'error':
      return (
        <div className='account__container-status'>
          <span className='account__error-text'>
            Упс... Что-то пошло не так...
          </span>

          <ButtonRefetch refetch={FavoritesQuery.refetch} />
        </div>
      );
  }
};
