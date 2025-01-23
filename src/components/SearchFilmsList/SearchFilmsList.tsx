import { FC } from 'react';
import { SearchCardFilm } from '@components/SearchCardFilm/SearchCardFilm';
import { MovieList } from '@type/MovieList';
import './SearchFilmsList.css';

export interface SearchFilmsListProps {
  data: MovieList | undefined;
  onCleanSearchValue: () => void;
}

export const SearchFilmsList: FC<SearchFilmsListProps> = ({
  data,
  onCleanSearchValue,
}) => {
  return (
    <div className='search__container-modal'>
      <ul className='list-reset search__list'>
        {data?.length !== 0 ? (
          <>
            {data?.map((film) => (
              <li className='search__item' key={film.id}>
                <SearchCardFilm
                  data={film}
                  onCleanSearchValue={onCleanSearchValue}
                />
              </li>
            ))}
          </>
        ) : (
          <li className='search__item'>
            <p className='search__message'>
              По вашему запросу ничего не найдено
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};
