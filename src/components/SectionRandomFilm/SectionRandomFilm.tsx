import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RandomFilm } from '@components/RandomFilm/RandomFilm';
import { Loader } from '@components/Loader/Loader';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import { getRandomMovie } from '@api/getRandomMovie';
import './SectionRandomFilm.css';

export const SectionRandomFilm: FC = () => {
  const RandomFilmQuery = useQuery({
    queryFn: () => getRandomMovie(),
    queryKey: ['random'],
    refetchOnWindowFocus: false,
  });

  switch (RandomFilmQuery.status) {
    case 'pending':
      return (
        <section className='random-film random-film__container-status'>
          <Loader />
        </section>
      );

    case 'success':
      return (
        <section className='random-film'>
          <RandomFilm
            data={RandomFilmQuery.data}
            refetch={RandomFilmQuery.refetch}
          />
        </section>
      );

    case 'error':
      return (
        <section className='random-film random-film__container-status'>
          <div className='random-film__container-error'>
            <span className='random-film__error-text'>
              Упс... Что-то пошло не так...
            </span>

            <ButtonRefetch refetch={RandomFilmQuery.refetch} />
          </div>
        </section>
      );
  }
};
