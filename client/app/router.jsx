import {Router, Route, hashHistory} from "react-router";
import Login from './components/auth/login';

export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Login}/>
      </Router>
    )
  }
});
