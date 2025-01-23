import { MovieList, MovieListSchema } from '@type/MovieList';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getMoviesByGenre(
  genre: string | undefined = '',
  page: number | undefined = 0
): Promise<MovieList> {
  const params = new URLSearchParams({
    count: '10',
    page: `${page}`,
    genre: genre,
  }).toString();
  return fetch(`${API_URL}/movie?${params}`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieListSchema.parse(data));
}
