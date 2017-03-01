import { actions } from "./notification.actions";

const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_NOTIFICATIONS_SUCCESS:
      return action.notifications;

    default:
      return state;
  }
};

export { notificationsReducer };
