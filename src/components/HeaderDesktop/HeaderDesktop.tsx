import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuHeader } from '@components/MenuHeader/MenuHeader';
import { Logo } from '@components/Logo/Logo';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { ModalMain } from '@components/ModalMain/ModalMain';
import { useOpenAndCloseModal } from '@hooks/useOpenAndCloseModal';
import { ProfileContext } from '@context/ProfileContext';
import './HeaderDesktop.css';

export const HeaderDesktop: FC = () => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  const { data, status } = useContext(ProfileContext);

  return (
    <>
      <Link to={'/'} className='link-reset logo header__logo'>
        <Logo className='img header__img' width={240} height={32} />
      </Link>

      <MenuHeader />

      <SearchInput />

      {status === 'success' ? (
        <Link to={'/account'} className='link-reset btn-reset btn-acc'>
          {data?.surname}
        </Link>
      ) : (
        <Button
          children={'Войти'}
          className='btn-reset btn-acc'
          onClick={handleModalOpen}
        />
      )}

      {modalActive && (
        <Modal
          onClose={handleModalClose}
          children={<ModalMain onClose={handleModalClose} />}
        />
      )}
    </>
  );
};
