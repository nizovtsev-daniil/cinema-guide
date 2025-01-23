import { FC } from 'react';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { Button } from '@components/Button/Button';
import { Movie } from '@type/Movie';
import { MovieList } from '@type/MovieList';
import { GenresArray } from '@type/GenresArray';
import IconUpdate from '@svg/icon-update.svg?react';

interface ButtonRefetchProps {
  refetch:
    | ((options?: RefetchOptions) => Promise<QueryObserverResult<Movie, Error>>)
    | ((
        options?: RefetchOptions
      ) => Promise<QueryObserverResult<MovieList, Error>>)
    | ((
        options?: RefetchOptions
      ) => Promise<QueryObserverResult<GenresArray, Error>>);
}

export const ButtonRefetch: FC<ButtonRefetchProps> = ({ refetch }) => {
  return (
    <Button
      className='btn-reset button--gray-icon'
      children={<IconUpdate />}
      onClick={() => refetch()}
    />
  );
};
