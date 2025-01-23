import { FC, lazy, Suspense } from 'react';
import { Loader } from '@components/Loader/Loader';
import './ModalTrailer.css';

const Player = lazy(() => import('@components/Player/Player'));

export interface ModalTrailerProps {
  url: string | null | undefined;
}

export const ModalTrailer: FC<ModalTrailerProps> = ({ url }) => {
  return (
    <div className='modal-trailer__container'>
      {url ? (
        <Suspense fallback={<Loader />}>
          <Player url={url} />
        </Suspense>
      ) : (
        <p className='modal-trailer__error'>Трейлер отсутствует</p>
      )}
    </div>
  );
};
