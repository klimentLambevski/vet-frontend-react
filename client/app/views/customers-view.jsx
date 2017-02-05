import { connect } from 'react-redux';
import { getCustomers } from '../components/dashboard/customer/customer.actions';
import { getPatientTypes } from '../components/dashboard/patients/patient-type/patient-type.actions';

class CustomersView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCustomers());
    this.props.dispatch(getPatientTypes());
  }

  render() {
    return (
      <section className="customers-view">
        {this.props.children}
      </section>
    );
  }
}

CustomersView = connect()(CustomersView);

export { CustomersView };
