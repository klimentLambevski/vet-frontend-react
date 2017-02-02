import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import auth from './auth/auth.reducer';
import alertMessages from './alert/alert.reducer';
import {patientsReducer as patients} from '../components/dashboard/patients/patients.reducer';
import {customersReducer as customers} from '../components/dashboard/customer/customers.reducer';

const rootReducer = combineReducers({
  // todo: find a suitable name for common
  common: combineReducers({
    auth
  }),
  alertMessages,
  routing,
  form,
  patients,
  customers
});

export default rootReducer;
