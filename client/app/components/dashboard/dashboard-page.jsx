import LogoutButton from '../auth/logout-button';
import SideNav from './side-nav/side-nav';

class DashboardPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        <SideNav/>
        <LogoutButton/>
        <section>
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default DashboardPage;
