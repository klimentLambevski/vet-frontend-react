import {Grid} from '../components/grid/grid';
import {CustomerApi} from '../services/api/customer';

export class PatientsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    CustomerApi.getAll().then((res) => {
      console.log(res.data.customers);
      this.setState({
        customers: _.map(res.data.customers, 'user')
      });
    })
  }

  render = () => (
    <div className="patients view container">
      <Grid id="grid1" rows={this.state.customers}/>
      <Grid id="grid2" rows={this.state.customers}/>
    </div>
  );
}
