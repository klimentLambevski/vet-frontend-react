import { connect } from 'react-redux';
import LoginFormContainer from './login.form.container';

const PropTypes = React.PropTypes;

//TODO show notification if there is an error.
//Should we use higher order component for showing errors caused by api calls?

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div>
          {this.props.auth.error && `Error: ${this.props.auth.error.message}`}
        </div>

        <LoginFormContainer redirectTo={this.props.location.query.next}/>
      </section>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.common.auth
  };
};

export default connect(mapStateToProps)(LoginPage);
