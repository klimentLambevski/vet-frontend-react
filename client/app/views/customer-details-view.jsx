import { CustomerFormContainer } from '../components/dashboard/customer/customer-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { PatientList } from '../components/dashboard/patients/patient-list';
import { connect } from 'react-redux';
import { getPatients } from '../components/dashboard/patients/patient.actions';

class CustomerDetailsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.params.id) {
      this.props.getPatients(this.props.params.id);
    }
  }

  render() {
    return (
      <section className="customer-details-view">
        <div className="customer-details-forms">
          <div className="edit-customer">
            <CustomerFormContainer customer={this.props.customer}/>
          </div>
          <div className="add-patient">
            <PatientFormContainer patient={{customerId: this.props.customer.id}}/>
          </div>
        </div>
        <div>
          <PatientList />
        </div>
      </section>
    );
  }
}


const selectCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.id === id);
  return customer.length > 0 ? customer[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: selectCustomerById(state.customers, ownProps.params.id)
});

CustomerDetailsView = connect(mapStateToProps, { getPatients })(CustomerDetailsView);

export { CustomerDetailsView };
