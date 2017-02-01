import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCustomers } from './customer.actions';
import CustomerList from './customer-list';

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getCustomers()
  }

  render() {
    return (
      <section>
        <h1>Customers</h1>

        <CustomerList customers={this.props.customers}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);
