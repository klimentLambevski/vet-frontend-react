import { push } from 'react-router-redux';
import * as types from './auth.types';
import { signIn, checkAuthenticated, logout } from '../api/auth.api';
import LocalStorageService from '../services/local.storage.service';

//action creators
const authSuccess = (loggedInUser) => {
  return {
    type: types.AUTH_SUCCESS,
    loggedInUser
  };
};

const authError = () => {
  //TODO impl
};

const notAuthenticated = () => {
  return {
    type: types.NOT_AUTHENTICATED
  };
};

const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS
  };
};

//thunks
export const authenticateUser = (user, redirectUrl) => {
  return (dispatch) => {
    return signIn(user)
      .then((data) => {
        LocalStorageService.setItem('AUTH_TOKEN', data.token);
        dispatch(authSuccess(data.user));
        dispatch(push(redirectUrl));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const isAuthenticated = () => {
  return (dispatch) => {
    const token = LocalStorageService.getItem('AUTH_TOKEN');
    if (!token) {
      dispatch(notAuthenticated());
    }

    return checkAuthenticated()
      .then((data) => {
        LocalStorageService.setItem('AUTH_TOKEN', data.token);
        dispatch(authSuccess(data.user));
      })
      .catch(() => {
        dispatch(notAuthenticated());
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return logout()
      .then(() => {
        LocalStorageService.removeItem('AUTH_TOKEN');
        dispatch(logoutSuccess());
        dispatch(push('/'));
      })
      .catch(error => {
        throw error;
      });
  };
};
