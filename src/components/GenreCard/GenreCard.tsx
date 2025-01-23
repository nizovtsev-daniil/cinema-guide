import { FC } from 'react';
import { Link } from 'react-router-dom';
import { changeUpperFirstChar } from '@utils/changeUpperFirstChar';
import './GenreCard.css';

export interface GenreCardProps {
  title: string;
  poster: string;
}

export const GenreCard: FC<GenreCardProps> = ({ title, poster }) => {
  return (
    <>
      <Link to={`/genre/${title}`} className='link-reset genres-list__link'>
        <img
          className='img genres-list__poster'
          src={poster}
          alt={`Обложка жанра ${title}`}
        />

        <div className='genres-list__wrapp-title-card'>
          <h3 className='genres-list__title-card'>
            {changeUpperFirstChar(title)}
          </h3>
        </div>
      </Link>
    </>
  );
};
