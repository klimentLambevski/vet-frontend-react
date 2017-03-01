import { LoginFormContainer } from '../components/auth/login-form.container';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <section className="login-view">
      <div className="form-container">
        <LoginFormContainer />
      </div>
    </section>
    );
  }
}

export { LoginView };
