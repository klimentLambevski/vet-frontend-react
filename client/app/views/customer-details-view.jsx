import { CustomerFormContainer } from '../components/dashboard/customer/customer-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { PatientList } from '../components/dashboard/patients/patient-list';
import { connect } from 'react-redux';

let CustomerDetailsView = ({customer}) => {

  return (
    <section>
      <h1>Customer Details</h1>
      <CustomerFormContainer customer={customer} />
      <PatientFormContainer />

      <PatientList />
    </section>
  );

};

const getCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.user.id === id);
  return customer.length > 0 ? customer[0].user : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: getCustomerById(state.customers, ownProps.params.id)
});

CustomerDetailsView = connect(mapStateToProps)(CustomerDetailsView);

export { CustomerDetailsView };
