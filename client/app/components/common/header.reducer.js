import {createActionMap} from "../../store/action";

export let actions = createActionMap({
  SET_COLOR: ''
}, 'header');

export function setColor(color) {
  return {
    type: actions.SET_COLOR,
    color: color
  }
}

export function headerReducer(state = {
  color: 'red'
}, action) {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}
