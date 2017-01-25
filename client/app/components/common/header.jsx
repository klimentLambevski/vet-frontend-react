import {Link, IndexLink} from 'react-router';
import {connect} from "react-redux";

const Header = () => {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <Link to="/dashboard" activeClassName="active">Dashboard</Link>
      <Link to="/login" activeClassName="active">Login</Link>
    </nav>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    header: state.header
  };
}


function mapDispatchToProps() {

}
export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
