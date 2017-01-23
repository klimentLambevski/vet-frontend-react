import * as types from '../actions/auth.types';

const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.AUTH_SUCCESS:
      console.log('store:', state, action);
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.loggedInUser
      });

    case types.NOT_AUTHENTICATED:
      return {
        isAuthenticated: false
      };

    case types.LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }

};

export default authReducer;
