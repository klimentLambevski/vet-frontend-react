
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
  }).then(response => {
    const jsonResponse = response.json();
    return jsonResponse.then(data => {
      return data.error ?
        Promise.reject({message: data.error})
        :
        Promise.resolve(data);
    });
  });

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
