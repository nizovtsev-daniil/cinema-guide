import { FC } from 'react';
import { FilmCard } from '@components/FilmCard/FilmCard';
import { MovieList } from '@type/MovieList';
import './FilmsList.css';

export interface FilmsListProps {
  data: MovieList;
}

export const FilmsList: FC<FilmsListProps> = ({ data }) => {
  return (
    <ul className='top-films__list'>
      {data.map((film, index) => (
        <li className='top-films__item' key={film.id}>
          <FilmCard film={film} count={index} />
        </li>
      ))}
    </ul>
  );
};
