import {IndexRoute, Route} from "react-router";
import App from "./components/app";
import LoginPage from "./components/auth/login-page";
import HomePage from "./components/home/home";
import DashboardPage from "./components/dashboard/dashboard-page";
import {CustomersView} from "./components/dashboard/customer/customers-view";
import {PatientsContainer} from "./views/patients";
import {CustomerList} from './components/dashboard/customer/customer-list';
import {CustomerFormContainer} from './components/dashboard/customer/customer-form.container';
import {PatientsView} from "./components/dashboard/patients/patients-view";
import {PatientList} from './components/dashboard/patients/patient-list';
import {PatientFormContainer} from './components/dashboard/patients/patient-form.container';

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
      <Route path="patients" component={PatientsView}>
        <IndexRoute component={PatientList}/>
        <Route path="new" component={PatientFormContainer}/>
        <Route path="(:id)" component={PatientFormContainer}/>
      </Route>
    </Route>
  </Route>
);
