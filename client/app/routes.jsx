import {IndexRoute, Route} from "react-router";
import App from "./components/app";
import LoginPage from "./components/auth/login-page";
import HomePage from "./components/home/home";
import DashboardPage from "./components/dashboard/dashboard-page";
import CustomersPage from "./components/dashboard/customer/customers-page";
import PatientsPage from "./components/dashboard/patients/patients-page";
import {PatientsContainer} from "./views/patients";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="patients" component={PatientsContainer}/>
    <Route
      path="dashboard" component={DashboardPage}
    >
      <Route path="customers" component={CustomersPage}/>
      <Route path="patients" component={PatientsPage}/>
    </Route>
  </Route>
);
