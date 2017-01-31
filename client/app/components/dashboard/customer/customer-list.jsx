import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCustomers } from './customer.actions';
import { Link } from 'react-router';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //TODO move this in page cmp
    this.props.actions.getCustomers()
  }

  render() {
    return (
      <section>
        <h1>Customers List</h1>

        <ul>
          {
            this.props.customers.map(customer =>
              <li key={customer.user.id}>
                <Link to={'/dashboard/customers/' + customer.user.id}>
                  {customer.user.name}
                </Link>
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getCustomers }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
