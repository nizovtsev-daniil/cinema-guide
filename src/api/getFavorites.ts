import { MovieList, MovieListSchema } from '@type/MovieList';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getFavorites(): Promise<MovieList> {
  return fetch(`${API_URL}/favorites`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieListSchema.parse(data));
}
