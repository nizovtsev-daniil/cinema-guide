import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@components/Logo/Logo';
import { Button } from '@components/Button/Button';
import { ButtonSearchMobile } from '@components/ButtonSearchMobile/ButtonSearchMobile';
import { Modal } from '@components/Modal/Modal';
import { ModalMain } from '@components/ModalMain/ModalMain';
import { useOpenAndCloseModal } from '@hooks/useOpenAndCloseModal';
import { ProfileContext } from '@context/ProfileContext';
import IconGenres from '@svg/icon-genres.svg?react';
import IconUser from '@svg/icon-user.svg?react';
import './HeaderMobile.css';

export const HeaderMobile: FC = () => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  const { status } = useContext(ProfileContext);

  return (
    <>
      <Link to={'/'} className='link-reset logo header-mobile__logo'>
        <Logo className='img header__img' width={136} height={18} />
      </Link>

      <ul className='list-reset header-mobile__list'>
        <li className='header-mobile__item'>
          <Link to={'/genres'} className='link-reset header-mobile__link'>
            <IconGenres />
          </Link>
        </li>

        <li className='header-mobile__item'>
          <ButtonSearchMobile />
        </li>

        <li className='header-mobile__item'>
          {status === 'success' ? (
            <Link to={'/account'} className='header-mobile__link'>
              <IconUser />
            </Link>
          ) : (
            <Button
              children={<IconUser />}
              className='header-mobile__link-btn'
              onClick={handleModalOpen}
            />
          )}
        </li>
      </ul>

      {modalActive && (
        <Modal
          onClose={handleModalClose}
          children={<ModalMain onClose={handleModalClose} />}
        />
      )}
    </>
  );
};
