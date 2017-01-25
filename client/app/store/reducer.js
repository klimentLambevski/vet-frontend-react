import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import auth from './auth/auth.reducer';
import {headerReducer} from '../components/common/header.reducer'

const rootReducer = combineReducers({
  // todo: find a suitable name for common
  common: combineReducers({
    auth
  }),
  header: headerReducer,
  routing: routerReducer
});

export default rootReducer;
