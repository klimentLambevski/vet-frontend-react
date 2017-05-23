import { connect } from 'react-redux';
import { Link } from 'react-router';

const LoginLink = ({ to, className = '', activeClassName = '', isAuthenticated }) => (
  !isAuthenticated ?
    <Link
      to={to}
      className={className}
      activeClassName={activeClassName}
    >
      Најава
    </Link>
    :
    null
);

LoginLink.propTypes = {
  to: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.common.auth.isAuthenticated
});

export default connect(mapStateToProps)(LoginLink);
