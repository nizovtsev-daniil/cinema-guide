import { FC } from 'react';
import IconVK from '@svg/icon-vk.svg?react';
import IconYoutube from '@svg/icon-youtube.svg?react';
import IconOK from '@svg/icon-ok.svg?react';
import IconTelegram from '@svg/icon-telegram.svg?react';
import './SocialLinkList.css';

export const SocialLinkList: FC = () => {
  return (
    <ul className='list-reset footer__list'>
      <li className='footer__item'>
        <a
          className='footer__link'
          href='https://vk.com/'
          aria-label='Перейти на страницу ВКонтакте'
        >
          <IconVK />
        </a>
      </li>

      <li className='footer__item'>
        <a
          className='footer__link'
          href='https://www.youtube.com/'
          aria-label='Перейти на страницу Ютуб'
        >
          <IconYoutube />
        </a>
      </li>

      <li className='footer__item'>
        <a
          className='footer__link'
          href='https://ok.ru/'
          aria-label='Перейти на страницу Одноклассники'
        >
          <IconOK />
        </a>
      </li>

      <li className='footer__item'>
        <a
          className='footer__link'
          href='https://telegram.org/'
          aria-label='Перейти на страницу Телеграм'
        >
          <IconTelegram />
        </a>
      </li>
    </ul>
  );
};
