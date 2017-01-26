import {push} from "react-router-redux";
import {signIn, checkAuthenticated, logout} from "../../services/api/auth.api";
import LocalStorageService from "../../services/storage/local.storage.service";
import {createActionMap} from "../action";

export const actions = createActionMap({
  AUTH_SUCCESS: '',
  NOT_AUTHENTICATED: '',
  LOGOUT_SUCCESS: '',
}, 'auth');

//action creators
const authSuccess = (loggedInUser) => {
  return {
    type: actions.AUTH_SUCCESS,
    loggedInUser
  };
};

const authError = () => {
  //TODO impl
};

const notAuthenticated = () => {
  return {
    type: actions.NOT_AUTHENTICATED
  };
};

const logoutSuccess = () => {
  return {
    type: actions.LOGOUT_SUCCESS
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