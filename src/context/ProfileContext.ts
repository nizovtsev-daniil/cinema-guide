import { createContext } from 'react';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { User } from '@type/User';

type createContextProp = {
  status: string;
  data: User | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<User, Error>>;
};

export const ProfileContext = createContext({} as createContextProp);
