import { validateResponse } from '@utils/validateResponse';
import { API_URL } from '@api/API_URL';

export function registration({
  email,
  password,
  name,
  surname,
}: {
  email: string;
  password: string;
  name: string;
  surname: string;
}): Promise<void> {
  return fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name, surname }),
  })
    .then(validateResponse)
    .then(() => undefined);
}
