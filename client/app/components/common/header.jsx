import {Link, IndexLink} from 'react-router';
import {connect} from "react-redux";

const Header = () => {
  return (
    <header className="header component">
      <div className="logo">
        <img src="./assets/img/logos/syringe.svg"/>
        <span>vet</span>
      </div>
      <nav className="main-navigation">
        <IndexLink className="--a-reset" to="/" activeClassName="active">Home</IndexLink>
        <Link className="--a-reset" to="/dashboard" activeClassName="active">Dashboard</Link>
        <Link className="--a-reset" to="/login" activeClassName="active">Login</Link>
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
