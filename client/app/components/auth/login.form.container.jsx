import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../../store/auth/auth.actions';
import LoginForm from './login.form';

class LoginFormContainer extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (user) {
    this.props.actions.authenticateUser(user, this.props.redirectTo || '/');
  }

  render () {
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

LoginFormContainer.propTypes = {
  redirectTo: React.PropTypes.string
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ authenticateUser }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
