import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore';
import routes from './routes';
import { isAuthenticated } from './actions/auth.thunks';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

//TODO remove this
import LocalStorageService from './services/local.storage.service';
LocalStorageService.removeItem('AUTH_TOKEN');


ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('r-boot')
);
