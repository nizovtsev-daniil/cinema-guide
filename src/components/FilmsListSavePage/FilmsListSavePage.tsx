import { FC, memo } from 'react';
import { FilmsListByGenre } from '@components/FilmsListByGenre/FilmsListByGenre';
import { useSaveDataPage } from '@hooks/useSaveDataPage';
import { MovieList } from '@type/MovieList';

export interface FilmsListSavePageProps {
  films: MovieList;
}

export const FilmsListSavePage: FC<FilmsListSavePageProps> = memo(
  ({ films }) => {
    const dataAllPage = useSaveDataPage(films);

    return (
      <>
        {dataAllPage ? (
          <FilmsListByGenre data={dataAllPage} key={crypto.randomUUID()} />
        ) : null}
      </>
    );
  }
);
