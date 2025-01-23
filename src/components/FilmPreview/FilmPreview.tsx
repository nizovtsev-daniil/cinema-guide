import { FC, useContext } from 'react';
import { ButtonTrailer } from '@components/ButtonTrailer/ButtonTrailer';
import { ButtonFavorites } from '@components/ButtonFavorites/ButtonFavorites';
import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { ModalMain } from '@components/ModalMain/ModalMain';
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
import './FilmPreview.css';

interface FilmPreviewProps {
  data: Movie;
}

export const FilmPreview: FC<FilmPreviewProps> = ({ data }) => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  const { status } = useContext(ProfileContext);

  return (
    <div className='film-preview__wrapper-container'>
      <div className='container film-preview__container'>
        {data.backdropUrl !== null ? (
          <div className='film-preview__wrapper-img'>
            <img
              className='img film-preview__film-image'
              src={data.backdropUrl}
              alt={`Обложка фильма ${data.title}`}
            />
          </div>
        ) : null}

        <div className='film-preview__wrapper-info'>
          <div className='film-preview__wrapper-rating'>
            <div
              className={`film-preview__rating ${getColorRating(data.tmdbRating)}`}
            >
              {fixRating(data.tmdbRating, 1)}
            </div>

            <p className='film-preview__text'>
              {sliceReleaseDate(data.releaseDate)}
            </p>

            <p className='film-preview__text film-preview__text--width'>
              {getListGenres(data.genres)}
            </p>

            <p className='film-preview__text'>
              {getTimeFromMins(data.runtime)}
            </p>
          </div>

          <h2 className='film-preview__title-film'>{data.title}</h2>

          <p className='film-preview__text film-preview__text--font-size film-preview__text--margin'>
            {data.plot}
          </p>

          <div className='film-preview__wrapper-btn'>
            <ButtonTrailer trailerUrl={data.trailerUrl} />

            {status === 'success' ? (
              <ButtonFavorites id={data.id} />
            ) : (
              <Button
                className='btn-reset button--gray-icon'
                children={<IconLike />}
                onClick={handleModalOpen}
              />
            )}
          </div>
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
