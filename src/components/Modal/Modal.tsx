import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Portal } from '@components/Portal/Portal';
import { createContainerPortal } from '@utils/createContainerPortal';
import { Button } from '@components/Button/Button';
import IconClose from '@svg/icon-close.svg?react';
import './Modal.css';

const MODAL_CONTAINER_ID = 'modal-container-id';

export interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
  version?: string;
}

export const Modal: FC<ModalProps> = ({
  onClose,
  children,
  version = 'login',
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainerPortal({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  const closeModal = useCallback(() => {
    document.getElementById('modal-animation')?.classList.add('modal-close');
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [onClose]);

  // закрытие модального окна по кнопке "закрыть"
  const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
    closeModal();
  };

  // закрытие модального окна по нажатию на "esc" и клику на "overlay"
  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        closeModal();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [closeModal]);

  // убрать скролл заднего фона при открытом модальном окне и сделать его неактивным для фокуса
  useEffect(() => {
    isMounted &&
      ((document.body.style.overflow = 'hidden'),
      document.getElementById('root')?.setAttribute('inert', 'true'));
    return () => {
      document.body.style.overflow = '';
      document.getElementById('root')?.removeAttribute('inert');
    };
  }, [isMounted]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={`modal__wrap modal__wrap--${version}`} ref={rootRef}>
        <div id='modal-animation' className='modal__content'>
          {children}
          <Button
            className='btn-reset button-close-modal'
            onClick={handleClose}
            children={<IconClose className='icon-close-modal' />}
          />
        </div>
      </div>
    </Portal>
  ) : null;
};
