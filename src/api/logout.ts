import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function logout(): Promise<void> {
  return fetch(`${API_URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then(() => undefined);
}
