import LoginFormContainer from './login.form.container';

class LoginPage extends React.Component {
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

export default LoginPage;
