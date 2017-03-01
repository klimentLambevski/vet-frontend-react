import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../../store/auth/auth.actions';
import LoginForm from './login-form';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user) {
    this.props.actions.authenticateUser(user, this.props.redirectTo || '/');
  }

  render() {
    return (
      <section>
        <h1>Login</h1>

        <LoginForm
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  redirectTo: state.routing.locationBeforeTransitions.query.next
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ authenticateUser }, dispatch),
});

LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

export { LoginFormContainer };
