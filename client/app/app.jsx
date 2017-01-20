import ReactDOM from "react-dom";
import Login from "./components/auth/login";
import Routes from "./router";

class App extends React.Component {
  render() {
    return (
      <Login/>
    );
  }
}

ReactDOM.render((
    <section>
      <div className="header">header</div>
      <Routes />
    </section>
  ),
  document.getElementById('r-boot')
);
