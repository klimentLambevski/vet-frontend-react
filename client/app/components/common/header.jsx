import { Link, IndexLink } from 'react-router';
import { connect } from "react-redux";
import LoginLink from '../auth/login-link';
import { LogoutButton } from '../auth/logout-button';

const Header = () => {
  return (
    <header className="header component">
      <div className="logo">
        <img src="./assets/img/logos/syringe.svg"/>
        <span>Vet</span>
      </div>
      <nav className="main-navigation">
        {/*<IndexLink className="--a-reset" to="/" activeClassName="active">Home</IndexLink>*/}
        <IndexLink className="--a-reset" to="/customers" activeClassName="active">Корисници</IndexLink>
        <Link className="--a-reset" to="/patient-types" activeClassName="active">Типови на пациенти</Link>
        <Link className="--a-reset" to="/notifications" activeClassName="active">Нотификации</Link>
        <LoginLink className="--a-reset" to="/login" activeClassName="active"/>
        <LogoutButton className="--a-reset" to="/logout"/>
      </nav>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    header: state.header
  };
}

export default connect(
  mapStateToProps
)(Header);
