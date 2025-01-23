import { SectionRandomFilm } from '@components/SectionRandomFilm/SectionRandomFilm';
import { SectionTopFilms } from '@components/SectionTopFilms/SectionTopFilms';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      {window.scrollTo(0, 0)}
      <SectionRandomFilm />
      <SectionTopFilms />
    </>
  );
};
