import { FC } from 'react';
import { SectionAboutTheFilm } from '@components/SectionAboutTheFilm/SectionAboutTheFilm';

export const FilmPage: FC = () => {
  return (
    <>
      {window.scrollTo(0, 0)}
      <SectionAboutTheFilm />
    </>
  );
};
