import { User, UserSchema } from '@type/User';
import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function getProfile(): Promise<User> {
  return fetch(`${API_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
}
