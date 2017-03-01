import { createActionMap } from '../../../store/action';
import { NotificationApi } from '../../../services/api/notification';
import { showAlert } from '../../../store/alert/alert.actions';

export const actions = createActionMap({
  GET_NOTIFICATIONS_SUCCESS: ''
}, 'notification');

const getNotificationsSuccess = (notifications) => ({
  type: actions.GET_NOTIFICATIONS_SUCCESS,
  notifications
});

export const getNotifications = () =>
  (dispatch) => NotificationApi.getAll()
    .then(
      response => dispatch(getNotificationsSuccess(response.data.notifications))
    )
    .catch(
      error => dispatch(showAlert(error))
    );
