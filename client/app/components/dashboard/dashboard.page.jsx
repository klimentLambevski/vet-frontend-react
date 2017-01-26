import Logout from '../auth/logout';

class DashboardPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        <Logout/>
      </section>
    );
  }
}

export default DashboardPage;
