import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'
import storeInit from './store/store';
import routes from './routes';

injectTapEventPlugin();

let store = storeInit();
window.store = store;
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('r-boot')
);
