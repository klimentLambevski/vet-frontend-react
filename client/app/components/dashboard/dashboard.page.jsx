import LogoutButton from '../auth/logout.button';

class DashboardPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        <LogoutButton/>
      </section>
    );
  }
}

export default DashboardPage;
