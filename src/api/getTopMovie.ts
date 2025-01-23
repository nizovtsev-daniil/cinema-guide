import { MovieList, MovieListSchema } from '@type/MovieList';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getTopMovie(): Promise<MovieList> {
  return fetch(`${API_URL}/movie/top10`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieListSchema.parse(data));
}
