import {IndexRoute, IndexRedirect, Route} from "react-router";
import App from "./components/app";
import {DashboardView} from "./views/dashboard-view";
import {CustomersView} from "./views/customers-view";
import {CustomerList} from "./components/dashboard/customer/customer-list";
import {PatientsView} from "./views/patients-view";
import {PatientTypesView} from "./views/patient-types.view";
import {PatientTypeList} from "./components/dashboard/patients/patient-type/patient-type-list";
import {CustomerDetailsView} from "./views/customer-details-view";
import {PatientDetailsView} from "./views/patient-details.view";
import {PatientsContainer} from "./views/patients";
import {PatientTypeDetailsView} from "./views/patient-type-details-view";

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/customers"/>
    {/*<Route path="login" component={LoginPage}/>*/}
    <Route path="grid" component={PatientsContainer}/>

    <Route path="dashboard" component={DashboardView}/>
    <Route path="customers" component={CustomersView}>
      <IndexRoute component={CustomerList}/>
      <Route path="(:id)" component={CustomerDetailsView}/>
    </Route>

    <Route path="patients" component={PatientsView}>
      <Route path="(:patientId)/(:examinationId)" component={PatientDetailsView}/>
    </Route>

    <Route path="patient-types" component={PatientTypesView}>
      <IndexRoute component={PatientTypeList}/>
      <Route path="(:patientTypeId)/(:immunizationId)" component={PatientTypeDetailsView}/>
    </Route>
  </Route>
);
