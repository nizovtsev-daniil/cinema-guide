import { FC, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchFilmsList } from '@components/SearchFilmsList/SearchFilmsList';
import { Button } from '@components/Button/Button';
import { getMoviesByTitle } from '@api/getMovieByTitle';
import IconSearch from '@svg/icon-search.svg?react';
import IconDelete from '@svg/icon-delete.svg?react';
import './SearchInput.css';

export const SearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const FilmsByTitleQuery = useQuery({
    queryFn: () => getMoviesByTitle(searchValue),
    queryKey: ['searchFilms', searchValue],
  });

  return (
    <div id='search-parent-id' className='header__wrapper-input'>
      <input
        ref={inputRef}
        className='header__search-input'
        placeholder='Поиск'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.currentTarget.value);
        }}
      />

      <IconSearch className='header__search-icon' />

      {searchValue ? (
        <>
          <Button
            className='btn-clean-search'
            children={<IconDelete className='header__icon-clean-search' />}
            onClick={() => {
              setSearchValue('');
              inputRef.current?.focus();
            }}
          />

          <SearchFilmsList
            data={FilmsByTitleQuery.data}
            onCleanSearchValue={() => setSearchValue('')}
          />
        </>
      ) : null}
    </div>
  );
};
