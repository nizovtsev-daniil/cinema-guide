import { MovieList, MovieListSchema } from '@type/MovieList';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getMoviesByTitle(
  title: string | undefined = ''
): Promise<MovieList> {
  const params = new URLSearchParams({
    count: '5',
    title: title,
  }).toString();
  return fetch(`${API_URL}/movie?${params}`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieListSchema.parse(data));
}
