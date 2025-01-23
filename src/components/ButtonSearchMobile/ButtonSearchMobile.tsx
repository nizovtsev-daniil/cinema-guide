import { FC } from 'react';
import { Button } from '@components/Button/Button';
import { ModalSearchMobile } from '@components/ModalSearchMobile/ModalSearchMobile';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { ModalSearchContext } from '@context/ModalSearchContext';
import { useOpenAndCloseModal } from '@hooks/useOpenAndCloseModal';
import IconSearch from '@svg/icon-search.svg?react';

export const ButtonSearchMobile: FC = () => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  return (
    <>
      <Button
        children={<IconSearch />}
        className='header-mobile__link-btn'
        onClick={handleModalOpen}
      />

      {modalActive && (
        <ModalSearchContext.Provider value={{ modalActive, handleModalClose }}>
          <ModalSearchMobile
            onClose={handleModalClose}
            children={<SearchInput />}
          />
        </ModalSearchContext.Provider>
      )}
    </>
  );
};
