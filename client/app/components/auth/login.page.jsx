import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../../store/auth/auth.actions';
import LoginForm from './login.form';

const PropTypes = React.PropTypes;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    const redirectRoute = this.props.location.query.next || '/login';

    this.state = {
      user: {
        email: '',
        password: ''
      },
      redirectUrl: redirectRoute
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user: user });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.authenticateUser(this.state.user, this.state.redirectUrl);
  }

  render() {
    return (
      <section>
        <h1>Login</h1>

        <LoginForm
          user={this.state.user}
          onSubmit={this.onSubmit}
          onValueChange={this.onValueChange}
        />
      </section>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ authenticateUser }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
