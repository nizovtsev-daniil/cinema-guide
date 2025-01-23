import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  })
    .then(validateResponse)
    .then(() => undefined);
}
