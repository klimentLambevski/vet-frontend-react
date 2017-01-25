import {actions} from "./auth.actions";

const authReducer = (state = {}, action) => {

  switch (action.type) {
    case actions.AUTH_SUCCESS:
      console.log('store:', state, action);
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.loggedInUser
      });

    case actions.NOT_AUTHENTICATED:
      return {
        isAuthenticated: false
      };

    case actions.LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }

};

export default authReducer;
