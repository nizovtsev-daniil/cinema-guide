import { FC } from 'react';
import { GenreCard } from '@components/GenreCard/GenreCard';
import { GenresArray } from '@type/GenresArray';
import { transformGenresList } from '@utils/transformGenresList';
import './GenresList.css';

export interface GenreListProps {
  list: GenresArray;
}

export const GenresList: FC<GenreListProps> = ({ list }) => {
  const transformList = transformGenresList(list);

  return (
    <ul className='list-reset genres-list__list'>
      {transformList
        ? transformList.map((genre) => (
            <li className='genres-list__item' key={genre.id}>
              <GenreCard title={genre.title} poster={genre.poster} />
            </li>
          ))
        : null}
    </ul>
  );
};
