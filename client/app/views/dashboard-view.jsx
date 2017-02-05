import LogoutButton from '../components/auth/logout-button';
import SideNav from '../components/dashboard/side-nav/side-nav';

class DashboardView extends React.Component {
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

export { DashboardView };
