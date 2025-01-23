import { useContext } from 'react';
import { ButtonLogout } from '@components/ButtonLogout/ButtonLogout';
import { ProfileContext } from '@context/ProfileContext';
import { getFirstCharWords } from '@utils/getFirstCharWords';
import IconEmail from '@svg/icon-email.svg?react';
import './SettingAccount.css';

export const SettingAccount = () => {
  const { data } = useContext(ProfileContext);

  return (
    <div className='setting-account__wrapper'>
      <div className='setting-account__wrap-content'>
        <div className='setting-account__wrap-data'>
          <div className='setting-account__wrap-icon'>
            <span className='setting-account__icon-text'>
              {getFirstCharWords(data?.name, data?.surname)}
            </span>
          </div>
          <div className='setting-account__wrap-text'>
            <p className='setting-account__name-data'>Имя Фамилия</p>
            <p className='setting-account__data'>{`${data?.name} ${data?.surname}`}</p>
          </div>
        </div>

        <div className='setting-account__wrap-data'>
          <div className='setting-account__wrap-icon'>{<IconEmail />}</div>
          <div className='setting-account__wrap-text'>
            <p className='setting-account__name-data'>Электронная почта</p>
            <p className='setting-account__data'>{data?.email}</p>
          </div>
        </div>
      </div>

      <ButtonLogout />
    </div>
  );
};
