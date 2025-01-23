import { FC } from 'react';
import { Button } from '@components/Button/Button';
import './SuccessMessageModal.css';

export interface SuccessMessageModalProps {
  handleSwitch: () => void;
}

export const SuccessMessageModal: FC<SuccessMessageModalProps> = ({
  handleSwitch,
}) => {
  return (
    <>
      <h2 className='modal__title'>Регистрация завершена</h2>

      <p className='modal__text'>
        Используйте вашу электронную почту для входа
      </p>

      <Button
        className='btn-reset--modal button button--violet-text modal__btn'
        children='Войти'
        onClick={handleSwitch}
      />
    </>
  );
};
