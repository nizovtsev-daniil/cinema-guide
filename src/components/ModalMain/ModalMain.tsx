import { FC, useState } from 'react';
import { Logo } from '@components/Logo/Logo';
import { LoginForm } from '@components/LoginForm/LoginForm';
import { RegistrationForm } from '@components/RegistrationForm/RegistrationForm';
import { SuccessMessageModal } from '@components/SuccessMessageModal/SuccessMessageModal';
import './ModalMain.css';

export interface ModalMainProps {
  onClose?: () => void;
}

export const ModalMain: FC<ModalMainProps> = ({ onClose }) => {
  const [versionModal, setVersionModal] = useState<string>('login');

  return (
    <div className='modal__container'>
      <Logo className='img modal__logo' width={180} height={24} />

      {versionModal === 'login' && (
        <LoginForm
          handleSwitch={() => setVersionModal('registration')}
          onClose={onClose}
        />
      )}

      {versionModal === 'registration' && (
        <RegistrationForm
          handleSwitchLogin={() => setVersionModal('login')}
          handleSwitchSuccess={() => setVersionModal('success')}
        />
      )}

      {versionModal === 'success' && (
        <SuccessMessageModal handleSwitch={() => setVersionModal('login')} />
      )}
    </div>
  );
};
