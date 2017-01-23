//TODO use fetch or smth...

export const signIn = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        Object.assign({}, { user }, { token: 'MY_AUTH_TOKEN' })
      );
    }, 1000);
  });
};

export const checkAuthenticated = () => {
  //TODO decode the token on the server side and send back user and token
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('is authenticated');
      reject({
        token: 'MY_AUTH_TOKEN',
        user: {
          email: 'kasper'
        }
      });
    }, 1000);
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
