import { HashRouter, Route, Routes } from 'react-router-dom';
import { CustomLayout } from '@components/CustomLayout/CustomLayout';
import { HomePage } from '@pages/HomePage/HomePage';
import { GenresPage } from '@pages/GenresPage/GenresPage';
import { FilmPage } from '@pages/FilmPage/FilmPage';
import { FilmsByGenrePage } from '@pages/FilmsByGenrePage/FilmsByGenrePage';
import { MyAccountPage } from '@pages/MyAccountPage/MyAccountPage';
import './App.css';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<CustomLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/genres' element={<GenresPage />} />
          <Route path='/film/:movieId' element={<FilmPage />} />
          <Route path='/genre/:genreName' element={<FilmsByGenrePage />} />
          <Route path='/account' element={<MyAccountPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
