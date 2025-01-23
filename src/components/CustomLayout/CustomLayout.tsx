import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getProfile } from '@api/getProfile';
import { queryClient } from '@api/queryClient';
import { ProfileContext } from '@context/ProfileContext';

export const CustomLayout: FC = () => {
  const { data, status, refetch } = useQuery(
    {
      queryFn: () => getProfile(),
      queryKey: ['users', 'me'],
      retry: false,
    },
    queryClient
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProfileContext.Provider value={{ data, status, refetch }}>
          <Header></Header>
          <main>
            <Outlet />
          </main>
          <Footer></Footer>
        </ProfileContext.Provider>
      </QueryClientProvider>
    </>
  );
};
