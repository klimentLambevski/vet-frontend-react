import { connect } from 'react-redux';
import { getNotifications } from '../components/dashboard/notifications/notification.actions';
import { NotificationGrid } from '../components/dashboard/notifications/notification-grid';

class NotificationsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getNotifications());
  }

  render() {
    return (
      <section>
        <NotificationGrid notifications={this.props.notifications}/>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications
});

NotificationsView = connect(mapStateToProps)(NotificationsView);

export { NotificationsView };
