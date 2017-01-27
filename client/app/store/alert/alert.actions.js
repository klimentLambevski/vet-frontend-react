import { createActionMap } from '../action';

export const actions = createActionMap({
  SHOW_ALERT: '',
  REMOVE_ALERT: ''
}, 'alert');

export const showAlert = (alert) => {
  return {
    type: actions.SHOW_ALERT,
    alert: {
      ...alert,
      alertId: _.uniqueId("alert-")
    }
  };
};

export const removeAlert = (alertId) => {
  return {
    type: actions.REMOVE_ALERT,
    alertId
  };
};
