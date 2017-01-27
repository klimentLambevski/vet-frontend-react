import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../store/auth/auth.actions';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick() {
    this.props.actions.logoutUser();
  }

  render() {
    return (
      <input
        type="button"
        disabled={!this.props.auth.isAuthenticated}
        onClick={() => this.onLogoutClick()}
        value={"Logout"}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.common.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ logoutUser }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
