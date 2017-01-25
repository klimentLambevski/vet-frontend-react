import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'
import storeInit from './store/store';
import routes from './routes';
import { isAuthenticated } from './store/auth/auth.actions';

let store = storeInit();
window.store = store;
const history = syncHistoryWithStore(hashHistory, store);

//TODO remove this
import LocalStorageService from './services/storage/local.storage.service';
LocalStorageService.removeItem('AUTH_TOKEN');


ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('r-boot')
);
