import { LoginFormContainer } from '../components/auth/login-form.container';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <LoginFormContainer />
      </section>
    );
  }
}

export { LoginView };
