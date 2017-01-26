import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../../store/auth/auth.actions';
import LoginForm from './login.form';

const PropTypes = React.PropTypes;

//TODO show notification if there is an error.
//Should we use higher order component for showing errors caused by api calls?

//TODO create login form container that will contain the login logic. Login page shouldn't know about the login logic.
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    const redirectRoute = this.props.location.query.next || '/';
    this.state = {
      redirectUrl: redirectRoute
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user) {
    this.props.actions.authenticateUser(user, this.state.redirectUrl);
  }

  render() {
    return (
      <section>
        <div>
          {this.props.auth.error && `Error: ${this.props.auth.error.message}`}
        </div>

        <h1>Login</h1>

        <LoginForm
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.common.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ authenticateUser }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
