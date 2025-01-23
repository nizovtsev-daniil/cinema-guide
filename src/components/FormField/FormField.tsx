import { FC, ReactNode } from 'react';
import './FormField.css';

interface FormFieldProps {
  children: ReactNode;
  icon: ReactNode;
  errorMessage?: string;
}

export const FormField: FC<FormFieldProps> = ({
  children,
  icon,
  errorMessage,
}) => {
  return (
    <label className='form-field'>
      {children}
      <div className='form-field__wrap-icon'>{icon}</div>
      {errorMessage && (
        <span className='form-field__error-text'>{errorMessage}</span>
      )}
    </label>
  );
};
