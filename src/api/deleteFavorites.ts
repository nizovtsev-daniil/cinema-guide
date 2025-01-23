import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function deleteFavorites(movieId: number): Promise<void> {
  return fetch(`${API_URL}/favorites/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(validateResponse)
    .then(() => undefined);
}
