import { Link } from 'react-router';

const SideNav = () => (
  <section>
    <Link to="/dashboard/customers" activeClassName="active">Customers</Link>
    {' | '}
    <Link to="/dashboard/patients" activeClassName="active">Patients</Link>
  </section>
);

export default SideNav;
