import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/dashboard" activeClassName="active">Dashboard</Link>
      {" | "}
      <Link to="/login" activeClassName="active">Login</Link>
    </nav>
  );
};

export default Header;
