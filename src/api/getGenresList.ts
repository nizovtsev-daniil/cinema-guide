import { GenresArray, GenresArraySchema } from '@type/GenresArray';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getGenresList(): Promise<GenresArray> {
  return fetch(`${API_URL}/movie/genres`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => GenresArraySchema.parse(data));
}
