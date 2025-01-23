import { createContext } from 'react';

type createContextProps = {
  modalActive: boolean;
  handleModalClose: () => void;
};

export const ModalSearchContext = createContext({} as createContextProps);
