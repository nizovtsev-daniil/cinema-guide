import { FC, useContext } from 'react';
import { ModalSearchContext } from '@context/ModalSearchContext';
import { Link } from 'react-router-dom';
import {
  getColorRating,
  sliceReleaseDate,
  getListGenres,
  getTimeFromMins,
} from '@utils/transformDataMovie';
import { fixRating } from '@utils/fixRating';
import { Movie } from '@type/Movie';
import './SearchCardFilm.css';

interface SearchCardFilmProps {
  data: Movie;
  onCleanSearchValue: () => void;
}

export const SearchCardFilm: FC<SearchCardFilmProps> = ({
  data,
  onCleanSearchValue,
}) => {
  const { modalActive, handleModalClose } = useContext(ModalSearchContext);

  return (
    <>
      {data.posterUrl !== null ? (
        <img
          className='search__poster'
          src={data.posterUrl}
          alt={`Обложка фильма ${data.title}`}
        />
      ) : (
        <div className='search__poster'></div>
      )}

      <div className='search__wrap-content'>
        <div className='search__wrap-info'>
          <div className={`search__rating ${getColorRating(data.tmdbRating)}`}>
            {fixRating(data.tmdbRating, 1)}
          </div>

          <p className='search__text'>{sliceReleaseDate(data.releaseDate)}</p>

          <p className='search__text'>{getListGenres(data.genres)}</p>

          <p className='search__text search__time'>
            {getTimeFromMins(data.runtime)}
          </p>
        </div>

        <h3 className='search__title'>
          <Link
            to={`/film/${data.id}`}
            className='link-reset search__link'
            onClick={() => {
              onCleanSearchValue();
              if (modalActive) {
                handleModalClose();
              }
            }}
          >
            {data.title}
          </Link>
        </h3>
      </div>
    </>
  );
};
