import { FC } from 'react';
import { SectionFilmsByGenre } from '@components/SectionFilmsByGenre/SectionFilmsByGenre';

export const FilmsByGenrePage: FC = () => {
  return (
    <>
      {window.scrollTo(0, 0)}
      <SectionFilmsByGenre />
    </>
  );
};
