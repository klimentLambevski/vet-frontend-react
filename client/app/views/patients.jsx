import {Grid} from "../components/grid/grid";
import {gridData} from "../../mocks/grid-data";
import {CustomerApi} from "../services/api/customer";

export class PatientsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      customers: gridData
    };

    CustomerApi.getAll().then((res) => {
      console.log(res.data.customers);
      this.setState({
        customers: res.data.customers
      });
    })
  }

  render = () => (
    <div className="patients view container">
      <Grid rows={this.state.customers}/>
    </div>
  );
}
