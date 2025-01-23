import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '@components/Portal/Portal';
import { createContainerPortal } from '@utils/createContainerPortal';
import './ModalSearchMobile.css';

const MODAL_SEARCH_CONTAINER_ID = 'modal-search-container-id';

export interface ModalSearchMobileProps {
  onClose?: () => void;
  children: React.ReactNode;
}

export const ModalSearchMobile: FC<ModalSearchMobileProps> = ({
  onClose,
  children,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainerPortal({ id: MODAL_SEARCH_CONTAINER_ID });
    setMounted(true);
  }, []);

  const closeModal = useCallback(() => {
    document
      .getElementById('modal-search-animation')
      ?.classList.add('modal-search-close');
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [onClose]);

  // закрытие модального окна по клику на "overlay"
  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        closeModal();
      }
    };

    window.addEventListener('click', handleWrapperClick);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
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
    <Portal id={MODAL_SEARCH_CONTAINER_ID}>
      <div className={`modal-search__wrap`} ref={rootRef}>
        <div id='modal-search-animation' className='modal-search__content'>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
