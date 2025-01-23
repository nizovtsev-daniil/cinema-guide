import { FC } from 'react';
import { Link } from 'react-router-dom';
import './MenuHeader.css';

export const MenuHeader: FC = () => {
  return (
    <nav className='nav header__nav'>
      <ul className='list-reset nav__list'>
        <li className='nav__item'>
          <Link to={'/'} className='link-reset nav__link'>
            Главная
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={'/genres'} className='link-reset nav__link'>
            Жанры
          </Link>
        </li>
      </ul>
    </nav>
  );
};
