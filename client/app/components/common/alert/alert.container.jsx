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

  render() {
    return (
      <div>
        {
          this.props.alertMessages
            .map((alert) =>
              <Alert
                key={alert.alertId}
                {...alert}
                onRemove={this.onRemove}
              />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alertMessages: state.alertMessages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ removeAlert }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);