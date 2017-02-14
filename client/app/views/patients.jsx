import {GridV5000} from '../components/grid/grid-v5000';
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
        // customers: _.map(res.data.customers, 'user')
        customers: res.data.customers
      });
    })
  }

  render = () => (
    <div className="patients view container">
      <GridV5000 rows={this.state.customers} columns={{'id': ''}} _onRowClick={(row) => console.log(row)}/>
      {/*<Grid id="grid2" rows={this.state.customers}/>*/}
    </div>
  );
}
