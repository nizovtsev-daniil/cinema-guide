import { useState } from 'react';

export const useOpenAndCloseModal = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return { modalActive, handleModalOpen, handleModalClose };
};
