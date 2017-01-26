import { connect } from 'react-redux';
import { Link } from 'react-router';

const Login = ({ to, className = '', activeClassName = '', isAuthenticated }) => (
  !isAuthenticated ?
    <Link
      to={to}
      className={className}
      activeClassName={activeClassName}
    >Login</Link>
    :
    null
);

Login.propTypes = {
  to: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.common.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Login);
