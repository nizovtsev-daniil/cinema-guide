import { FC } from 'react';
import { FilmCard } from '@components/FilmCard/FilmCard';
import { MovieList } from '@type/MovieList';
import './FavoritesFilmsList.css';

interface FavoritesFilmsListProps {
  data: MovieList;
}

export const FavoritesFilmsList: FC<FavoritesFilmsListProps> = ({ data }) => {
  return (
    <>
      <ul className='account__list'>
        {data.map((film) => (
          <li className='account__item' key={film.id}>
            <FilmCard film={film} deleteBtn={true} />
          </li>
        ))}
      </ul>
    </>
  );
};
