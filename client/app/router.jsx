import { Router, hashHistory } from "react-router";
import routes from './routes';

export default (
  <Router history={hashHistory} routes={routes}/>
);
