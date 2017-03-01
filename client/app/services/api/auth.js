
export const signIn = (user) =>
  fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

export const checkAuthenticated = (token) =>
  fetch('/auth/isAuthenticated', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    }
  }).then(response => response.json());

export const logout = (token) =>
  fetch('/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    }
  }).then(response => response.json());
