import {IndexRoute, Route} from "react-router";
import App from "./components/app";
import LoginPage from "./components/auth/login-page";
import HomePage from "./components/home/home";
import DashboardPage from "./components/dashboard/dashboard-page";
import {CustomersView} from "./components/dashboard/customer/customers-view";
import PatientsPage from "./components/dashboard/patients/patients-page";
import {PatientsContainer} from "./views/patients";
import {CustomerFormContainer} from './components/dashboard/customer/customer-form.container';
import {CustomerList} from './components/dashboard/customer/customer-list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="patients" component={PatientsContainer}/>
    <Route
      path="dashboard" component={DashboardPage}
    >
      <Route path="customers" component={CustomersView}>
        <IndexRoute component={CustomerList}/>
        <Route path="new" component={CustomerFormContainer}/>
        <Route path="(:id)" component={CustomerFormContainer}/>
      </Route>
      <Route path="patients" component={PatientsPage}/>
    </Route>
  </Route>
);
