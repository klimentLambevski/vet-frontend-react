import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAlert } from '../../../store/alert/alert.actions';
import Alert from './alert';

class AlertContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(alertId) {
    this.props.actions.removeAlert(alertId);
  }

  getMessage(alert) {
    return typeof alert.message === 'string' ? alert.message : alert[0].message;
  }

  render() {
    return (
      <div className="alert-container">
        {
          this.props.alertMessages
            .map((alert) =>
              <Alert
                key={alert.alertId}
                message={this.getMessage(alert)}
                onRemove={this.onRemove}
              />
            )
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alertMessages: state.alertMessages
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ removeAlert }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
