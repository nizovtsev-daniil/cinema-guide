import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@components/Button/Button';
import { ProfileContext } from '@context/ProfileContext';
import { queryClient } from '@api/queryClient';
import { addFavorites } from '@api/addFavorites';
import { deleteFavorites } from '@api/deleteFavorites';
import IconLike from '@svg/icon-like.svg?react';
import IconLikeViolet from '@svg/icon-like-full-violet.svg?react';

interface ButtonFavoritesProps {
  id: number;
}

export const ButtonFavorites: FC<ButtonFavoritesProps> = ({ id }) => {
  const { data } = useContext(ProfileContext);

  const [versionButton, setVersionButton] = useState('');

  const AddFavoritesMutation = useMutation(
    {
      mutationFn: addFavorites,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['favorites', 'users', 'me'],
        });
        queryClient.refetchQueries({ queryKey: ['users'] });
      },
    },
    queryClient
  );

  const DeleteFavoritesMutation = useMutation(
    {
      mutationFn: deleteFavorites,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['favorites', 'users', 'me'],
        });
        queryClient.refetchQueries({ queryKey: ['users'] });
      },
    },
    queryClient
  );

  const includesId = useCallback(
    (list: string[] | undefined, idMovie: string) => {
      if (list?.includes(idMovie)) {
        setVersionButton('added');
      } else {
        setVersionButton('notAdded');
      }
    },
    []
  );

  useEffect(() => {
    includesId(data?.favorites, id.toString());
  }, [includesId, data?.favorites, id]);

  if (versionButton === 'added') {
    return (
      <Button
        className='btn-reset button--gray-icon'
        children={<IconLikeViolet />}
        onClick={() => {
          DeleteFavoritesMutation.mutate(id);
        }}
      />
    );
  }

  if (versionButton === 'notAdded') {
    return (
      <Button
        className='btn-reset button--gray-icon'
        children={<IconLike />}
        onClick={() => {
          AddFavoritesMutation.mutate(id.toString());
        }}
      />
    );
  }
};
