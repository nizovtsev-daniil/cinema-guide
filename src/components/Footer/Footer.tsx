import { FC } from 'react';
import { SocialLinkList } from '@components/SocialLinkList/SocialLinkList';
import IconCopy from '@svg/icon-copy-footer.svg?react';
import './Footer.css';

export const Footer: FC = () => {
  return (
    <footer id='footer' className='footer'>
      <div className='container footer__container'>
        <small className='footer__text'>
          <span>LLC «Мультимедиа Визион»</span>
          <span className='footer__text--color'>
            <IconCopy className='footer__icon-copy' />
            Все права защищены
          </span>
        </small>

        <SocialLinkList />
      </div>
    </footer>
  );
};
