import { Link } from 'react-router';

const SideNav = () => (
  <section>
    <Link to="/customers" activeClassName="active">Customers</Link>
    {' | '}
    <Link to="/patients" activeClassName="active">Patients</Link>
    {' | '}
    <Link to="/patient-types" activeClassName="active">Patient Types</Link>
  </section>
);

export default SideNav;
