import { Movie, MovieSchema } from '@type/Movie';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getRandomMovie(): Promise<Movie> {
  return fetch(`${API_URL}/movie/random`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => MovieSchema.parse(data));
}
