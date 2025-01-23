import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function addFavorites(id: string): Promise<void> {
  return fetch(`${API_URL}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  })
    .then(validateResponse)
    .then(() => undefined);
}
