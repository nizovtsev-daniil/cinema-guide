import { FC } from 'react';
import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { ModalTrailer } from '@components/ModalTrailer/ModalTrailer';
import { useOpenAndCloseModal } from '@hooks/useOpenAndCloseModal';

interface ButtonTrailerProps {
  trailerUrl: string | null | undefined;
}

export const ButtonTrailer: FC<ButtonTrailerProps> = ({ trailerUrl }) => {
  const { modalActive, handleModalOpen, handleModalClose } =
    useOpenAndCloseModal();

  return (
    <>
      <Button
        children='Трейлер'
        className='btn-reset button button--violet-text'
        onClick={handleModalOpen}
      />

      {modalActive && (
        <Modal
          onClose={handleModalClose}
          version='trailer'
          children={<ModalTrailer url={trailerUrl} />}
        />
      )}
    </>
  );
};
