import { FC } from 'react';
import { Button } from '@components/Button/Button';
import './ButtonShowMore.css';

interface ButtonShowMoreProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const ButtonShowMore: FC<ButtonShowMoreProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <>
      <Button
        children='Показать ещё'
        className='btn-reset button button--violet-text films-by-genre__button'
        onClick={onClick}
        isDisabled={!isDisabled}
      />
    </>
  );
};
