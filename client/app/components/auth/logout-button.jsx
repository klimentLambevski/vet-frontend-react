import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../store/auth/auth.actions';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
  }

  render() {
    const { isAuthenticated, className } = this.props;

    return (
      isAuthenticated ?
        <a
          className={className}
          onClick={() => this.onLogoutClick(event)}
        >Logout</a>
        :
        null
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.common.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logoutUser }, dispatch)
});

LogoutButton = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export { LogoutButton };
