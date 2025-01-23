import { FC, HTMLAttributes } from 'react';
import { Loader } from '@components/Loader/Loader';
import './Button.css';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button disabled={isDisabled} type={type} {...props}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};
