import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import auth from './auth/auth.reducer';
import alertMessages from './alert/alert.reducer';
import {patientsReducer as patients} from '../components/dashboard/patients/patients.reducer';
import {customersReducer as customers} from '../components/dashboard/customer/customers.reducer';
import {gridReducer as grid} from './grid/grid.reducer';
import {patientTypesReducer as patientTypes} from '../components/dashboard/patients/patient-type/patient-types.reducer';
import {examinationsReducer as examinations} from '../components/dashboard/examinations/examination.reducer';

const rootReducer = combineReducers({
  // todo: find a suitable name for common
  common: combineReducers({
    auth,
    grid
  }),
  alertMessages,
  routing,
  form,
  patients,
  customers,
  patientTypes,
  examinations
});

export default rootReducer;
