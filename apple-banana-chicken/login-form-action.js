export const LOGIN = 'login';

export function login({ email, password }) {
  return  {
    type: LOGIN,
    payload: {
      email,
      password
    }
  }
}
