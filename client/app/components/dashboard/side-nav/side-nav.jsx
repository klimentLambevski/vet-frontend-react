import { Link } from 'react-router';

const SideNav = () => (
  <section>
    <Link to="/dashboard/customers" activeClassName="active">Customers</Link>
    {' | '}
    <Link to="/dashboard/patients" activeClassName="active">Patients</Link>
    {' | '}
    <Link to="/dashboard/patient-types" activeClassName="active">Patient Types</Link>
  </section>
);

export default SideNav;
