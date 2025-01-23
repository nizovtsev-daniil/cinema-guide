import { FC } from 'react';
import svgLogoHeader from '@svg/logo-header.svg';
import './Logo.css';

interface ILogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const Logo: FC<ILogoProps> = ({ className, width, height }) => {
  return (
    <img
      className={className}
      src={svgLogoHeader}
      width={width}
      height={height}
      alt='Логотип сайта CinemaGuide'
    />
  );
};
