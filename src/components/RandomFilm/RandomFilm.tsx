import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { ButtonTrailer } from '@components/ButtonTrailer/ButtonTrailer';
import { ButtonFavorites } from '@components/ButtonFavorites/ButtonFavorites';
import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { ModalMain } from '@components/ModalMain/ModalMain';
import { ButtonRefetch } from '@components/ButtonUpdateFilm/ButtonUpdateFilm';
import {
  getColorRating,
  sliceReleaseDate,
  getListGenres,
  getTimeFromMins,
} from '@utils/transformDataMovie';
import { ProfileContext } from '@context/ProfileContext';
import { useOpenAndCloseModal } from '@hooks/useOpenAndCloseModal';
import { Movie } from '@type/Movie';
import { fixRating } from '@utils/fixRating';
import IconLike from '@svg/icon-like.svg?react';
import './RandomFilm.css';

interface RandomFilmProps {
  data: Movie;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<Movie, Error>>;
}

export const RandomFilm: FC<RandomFilmProps> = ({ data, refetch }) => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  const { status } = useContext(ProfileContext);

  return (
    <div className='container random-film__container'>
      {data.backdropUrl !== null ? (
        <div className='random-film__wrapper-img'>
          <img
            className='img random-film__film-image'
            src={data.backdropUrl}
            alt={`Обложка фильма ${data.title}`}
          />
        </div>
      ) : null}

      <div className='random-film__wrapper-info'>
        <div className='random-film__wrapper-rating'>
          <div
            className={`random-film__rating ${getColorRating(data.tmdbRating)}`}
          >
            {fixRating(data.tmdbRating, 1)}
          </div>

          <p className='random-film__text'>
            {sliceReleaseDate(data.releaseDate)}
          </p>

          <p className='random-film__text random-film__text--width'>
            {getListGenres(data.genres)}
          </p>

          <p className='random-film__text'>{getTimeFromMins(data.runtime)}</p>
        </div>

        <h3 className='random-film__title-film'>{data.title}</h3>

        <p className='random-film__text random-film__text--font-size random-film__text--margin'>
          {data.plot}
        </p>

        <div className='random-film__wrapper-btn'>
          <ButtonTrailer trailerUrl={data.trailerUrl} />

          <Link
            to={`/film/${data.id}`}
            className='link-reset btn-reset button button--gray-text'
          >
            О фильме
          </Link>

          {status === 'success' ? (
            <ButtonFavorites id={data.id} />
          ) : (
            <Button
              className='btn-reset button--gray-icon'
              children={<IconLike />}
              onClick={handleModalOpen}
            />
          )}

          <ButtonRefetch refetch={refetch} />
        </div>
      </div>

      {modalActive && (
        <Modal
          onClose={handleModalClose}
          children={<ModalMain onClose={handleModalClose} />}
        />
      )}
    </div>
  );
};
