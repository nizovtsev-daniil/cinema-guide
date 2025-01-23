import { FC } from 'react';
import { HeaderMobile } from '@components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from '@components/HeaderDesktop/HeaderDesktop';
import { useDeviceDetect } from '@hooks/useDeviceDetect';
import './Header.css';

export const Header: FC = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <header className='header'>
      <div className='container header__container'>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </header>
  );
};
