import { FC } from 'react';
import { FilmCard } from '@components/FilmCard/FilmCard';
import { MovieList } from '@type/MovieList';
import './FilmsListByGenre.css';

export interface FilmsListByGenreProps {
  data: MovieList;
}

export const FilmsListByGenre: FC<FilmsListByGenreProps> = ({ data }) => {
  return (
    <ul className='list-reset films-by-genre__list'>
      {data.map((film) => (
        <li className='films-by-genre__item' key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </ul>
  );
};
