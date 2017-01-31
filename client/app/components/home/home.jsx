import {getPatient} from "../../services/api/patients";
class HomePage extends React.Component {
  constructor() {
    super();
    getPatient()
  }
  render() {
    return (
      <div className="home page">
        <div className="sub-header">
          <h2>Welcome to Vet</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
