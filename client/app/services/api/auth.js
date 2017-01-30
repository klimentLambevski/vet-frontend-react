//TODO use fetch or smth...

let i = 0;

export const signIn = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i % 2 == 1) {
        resolve(
          Object.assign({}, { user }, { token: 'MY_AUTH_TOKEN' })
        );
      }
      else {
        reject(
          { message: 'Invalid email or password' }
        );
      }

      i++;
    }, 500);
  });
};

export const checkAuthenticated = () => {
  //TODO decode the token on the server side and send back user and token
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({success: true});
    }, 500);
  });
};
