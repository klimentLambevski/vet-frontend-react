import {Link, IndexLink} from 'react-router';
import {connect} from "react-redux";
import LoginLink from '../auth/login-link';

const Header = () => {
  return (
    <header className="header component">
      <div className="logo">
        <img src="./assets/img/logos/syringe.svg"/>
        <span>Vet</span>
      </div>
      <nav className="main-navigation">
        <IndexLink className="--a-reset" to="/" activeClassName="active">Home</IndexLink>
        <Link className="--a-reset" to="/dashboard" activeClassName="active">Customers</Link>
        <Link className="--a-reset" to="/patient-types" activeClassName="active">Patient Types</Link>
        <LoginLink className="--a-reset" to="/login" activeClassName="active"/>
      </nav>
    </header>
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
