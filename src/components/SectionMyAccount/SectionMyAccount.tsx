import { FC, useEffect, useState } from 'react';
import { Button } from '@components/Button/Button';
import { FavoritesTab } from '@components/FavoritesTab/FavoritesTab';
import { SettingAccount } from '@components/SettingAccount/SettingAccount';
import { useDeviceDetect } from '@hooks/useDeviceDetect';
import IconLike from '@svg/icon-like.svg?react';
import IconUser from '@svg/icon-user.svg?react';
import './SectionMyAccount.css';

export const SectionMyAccount: FC = () => {
  const [versionAccount, setVersionAccount] = useState('favorites');

  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    if (isMobile === false) {
      document.getElementById('footer')?.classList.add('footer-fixed');
      return () =>
        document.getElementById('footer')?.classList.remove('footer-fixed');
    }
  }, [isMobile]);

  return (
    <section className='account'>
      <div className='container account__container'>
        <h2 className='account__title'>Мой аккаунт</h2>

        <div className='account__wrap-btn'>
          <Button
            className='btn-reset btn-acc'
            onClick={() => setVersionAccount('favorites')}
          >
            <IconLike className='account__icon-btn' />
            <span className='account__text-btn'>
              {isMobile ? 'Избранное' : 'Избранные фильмы'}
            </span>
          </Button>

          <Button
            className='btn-reset btn-acc'
            onClick={() => setVersionAccount('setting')}
          >
            <IconUser className='account__icon-btn' />
            <span className='account__text-btn'>
              {isMobile ? 'Настройки' : 'Настройки аккаунта'}
            </span>
          </Button>
        </div>

        {versionAccount === 'favorites' && <FavoritesTab />}

        {versionAccount === 'setting' && <SettingAccount />}
      </div>
    </section>
  );
};
