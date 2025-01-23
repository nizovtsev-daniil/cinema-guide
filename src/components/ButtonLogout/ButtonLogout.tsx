import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { logout } from '@api/logout';
import { queryClient } from '@api/queryClient';

export const ButtonLogout = () => {
  const logoutMutation = useMutation(
    {
      mutationFn: () => logout(),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return (
    <Link
      className='link-reset btn-reset button button--violet-text'
      to={'/'}
      onClick={() => {
        logoutMutation.mutate();
      }}
    >
      Выйти из аккаунта
    </Link>
  );
};
