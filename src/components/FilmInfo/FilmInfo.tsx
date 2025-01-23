import { FC } from 'react';
import {
  getLanguage,
  getCurrency,
  checkDataExistence,
} from '@utils/transformDataMovie';
import { Movie } from '@type/Movie';
import './FilmInfo.css';

interface FilmInfoProps {
  data: Movie;
}

export const FilmInfo: FC<FilmInfoProps> = ({ data }) => {
  return (
    <div className='container film-info__container'>
      <h3 className='film-info__title'>О Фильме</h3>

      <ul className='list-reset film-info__list'>
        <li className='film-info__item'>
          Язык оригинала
          <span className='film-info__value'>{getLanguage(data.language)}</span>
        </li>
        <li className='film-info__item'>
          Бюджет
          <span className='film-info__value'>{getCurrency(data.budget)}</span>
        </li>
        <li className='film-info__item'>
          Выручка
          <span className='film-info__value'>{getCurrency(data.revenue)}</span>
        </li>
        <li className='film-info__item'>
          Режиссёр
          <span className='film-info__value'>
            {checkDataExistence(data.director)}
          </span>
        </li>
        <li className='film-info__item'>
          Продакшен
          <span className='film-info__value'>
            {checkDataExistence(data.production)}
          </span>
        </li>
        <li className='film-info__item'>
          Награды
          <span className='film-info__value'>
            {checkDataExistence(data.awardsSummary)}
          </span>
        </li>
      </ul>
    </div>
  );
};
