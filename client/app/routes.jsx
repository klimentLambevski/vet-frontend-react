import { Route, IndexRoute } from "react-router";
import App from './components/app';
import LoginPage from './components/auth/login';
import HomePage from './components/home/home';
import DashboardPage from './components/dashboard/dashboard.page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="dashboard" component={DashboardPage}/>
  </Route>
);
