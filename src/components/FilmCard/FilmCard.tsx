import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Button } from '@components/Button/Button';
import { deleteFavorites } from '@api/deleteFavorites';
import { queryClient } from '@api/queryClient';
import { Movie } from '@type/Movie';
import IconDelete from '@svg/icon-delete.svg?react';
import './FilmCard.css';

export interface FilmCardProps {
  film: Movie;
  count?: number;
  deleteBtn?: boolean;
}

export const FilmCard: FC<FilmCardProps> = ({ film, count, deleteBtn }) => {
  const DeleteBtnMutation = useMutation(
    {
      mutationFn: deleteFavorites,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['favorites'],
        });
        queryClient.refetchQueries({
          queryKey: ['users'],
          type: 'active',
        });
      },
    },
    queryClient
  );

  return (
    <>
      <Link to={`/film/${film.id}`} className='link-reset film-card__link'>
        {film.posterUrl !== null ? (
          <img
            className='img film-card__film-img'
            src={film.posterUrl}
            alt={`Обложка фильма ${film.title}`}
          />
        ) : (
          <div className='film-card__film-img'>
            <h3 className='film-card__text'>{film.title}</h3>
          </div>
        )}
      </Link>

      {count || count === 0 ? (
        <div className='film-card__count'>{count + 1}</div>
      ) : null}

      {deleteBtn === true ? (
        <Button
          id='delete-film'
          className='delete-film-btn'
          onClick={() => {
            DeleteBtnMutation.mutate(film.id);
          }}
          children={
            <IconDelete width={14} height={14} className='delete-film-icon' />
          }
        />
      ) : null}
    </>
  );
};
