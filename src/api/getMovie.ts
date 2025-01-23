import { Movie, MovieSchema } from '@type/Movie';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getMovie(movieId: string | undefined): Promise<Movie> {
  return fetch(`${API_URL}/movie/${movieId}`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieSchema.parse(data));
}
