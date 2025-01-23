import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '@components/Loader/Loader';
import { FilmPreview } from '@components/FilmPreview/FilmPreview';
import { FilmInfo } from '@components/FilmInfo/FilmInfo';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getMovie } from '@api/getMovie';
import './SectionAboutTheFilm.css';

export const SectionAboutTheFilm: FC = () => {
  const { movieId } = useParams();

  const FilmQuery = useQuery({
    queryFn: () => getMovie(movieId),
    queryKey: ['movieId', movieId],
  });

  switch (FilmQuery.status) {
    case 'pending':
      return (
        <section className='film film__container-status'>
          <Loader />
        </section>
      );

    case 'success':
      return (
        <section className='film'>
          <FilmPreview data={FilmQuery.data} />
          <FilmInfo data={FilmQuery.data} />
        </section>
      );

    case 'error':
      return (
        <section className='film film__container-status'>
          <div className='film__container-error'>
            <span className='film__error-text'>
              Упс... Что-то пошло не так...
            </span>

            <ButtonRefetch refetch={FilmQuery.refetch} />
          </div>
        </section>
      );
  }
};
